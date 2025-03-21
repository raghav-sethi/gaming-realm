"use client";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import styles from "./UserProfile.module.css";

const UserDashboard = () => {

  // for getting user information
  
  const [user, setUser] = useState<{ username: string; name: string; email: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/users/${id}`); 
        if (!response.ok) {
          throw new Error(`Error:${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        setUser(data); 
        setIsLoading(false); 
      } catch (error : any) {
        setError(error.message);
        setIsLoading(false); 
      }
    };
    fetchUserData();
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!user) return null;

  //for changing password 

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordData, setPasswordData] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChangePassword = async () => {
    const { email, currentPassword, newPassword, confirmPassword } = passwordData;

    if (!email) {
      alert("Email is required!");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }

    try {
      const response = await fetch("localhost:8000/api/auth/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          oldPassword: currentPassword,
          newPassword,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message); // Success message from backend
        setShowPasswordModal(false);
        setPasswordData({
          email: "",
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      } else {
        alert(data.message); // Error message from backend
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/auth/logout", {
        method: "POST",
        credentials: "include", 
      });

      if (response.ok) {
        alert("Logout successful!");
        setShowLogoutModal(false);
      } else {
        const data = await response.json();
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error during logout:", error);
      alert("An error occurred while logging out.");
    }
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeleteAccount = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/users/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Account deleted successfully!");
        setShowDeleteModal(false);
      } else {
        const data = await response.json();
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error during account deletion:", error);
      alert("An error occurred while deleting your account.");
    }
  };

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setPasswordData({
      ...passwordData,
      [id]: value,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>Profile</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.avatarContainer}>
            <div className={styles.avatar}>
              <span className={styles.avatarText}>{user.username.substring(0, 2).toUpperCase()}</span>
            </div>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>👤</div>
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>Username</div>
                <div className={styles.infoValue}>{user.username}</div>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>👤</div>
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>Name</div>
                <div className={styles.infoValue}>{user.name}</div>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>✉</div>
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>Email</div>
                <div className={styles.infoValue}>{user.email}</div>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <button className={styles.actionButton} onClick={() => setShowPasswordModal(true)}>
              🔒 Change Password
            </button>

            <button className={styles.actionButton} onClick={() => setShowLogoutModal(true)}>
              🚪 Logout
            </button>

            <button
              className={`${styles.actionButton} ${styles.deleteButton}`}
              onClick={() => setShowDeleteModal(true)}
            >
              🗑 Delete Account
            </button>
          </div>
        </div>
      </div>
      {showLogoutModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Confirm Logout</h3>
              <button className={styles.modalClose} onClick={() => setShowLogoutModal(false)}>
                ✕
              </button>
            </div>
            <div className={styles.modalContent}>
              <p>Are you sure you want to log out?</p>
            </div>
            <div className={styles.modalFooter}>
              <button
                className={styles.secondaryButton}
                onClick={() => setShowLogoutModal(false)}
              >
                Cancel
              </button>
              <button className={styles.primaryButton} onClick={handleLogout}>
                Confirm Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Confirm Deletion</h3>
              <button
                className={styles.modalClose}
                onClick={() => setShowDeleteModal(false)}
              >
                ✕
              </button>
            </div>
            <div className={styles.modalContent}>
              <p>Are you sure you want to delete your account? This action cannot be undone.</p>
            </div>
            <div className={styles.modalFooter}>
              <button
                className={styles.secondaryButton}
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button className={styles.primaryButton} onClick={handleDeleteAccount}>
                Confirm Deletion
              </button>
            </div>
          </div>
        </div>
      )}


      {showPasswordModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Change Password</h3>
              <button
                className={styles.modalClose}
                onClick={() => setShowPasswordModal(false)}
              >
                ✕
              </button>
            </div>

            <div className={styles.modalContent}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={styles.input}
                  value={passwordData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="currentPassword" className={styles.label}>
                  Current Password
                </label>
                <input
                  id="currentPassword"
                  type="password"
                  className={styles.input}
                  value={passwordData.currentPassword}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="newPassword" className={styles.label}>
                  New Password
                </label>
                <input
                  id="newPassword"
                  type="password"
                  className={styles.input}
                  value={passwordData.newPassword}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword" className={styles.label}>
                  Confirm New Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  className={styles.input}
                  value={passwordData.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button
                className={styles.secondaryButton}
                onClick={() => setShowPasswordModal(false)}
              >
                Cancel
              </button>
              <button className={styles.primaryButton} onClick={handleChangePassword}>
                Update Password
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;