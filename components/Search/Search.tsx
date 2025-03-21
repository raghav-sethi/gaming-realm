"use client";
import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import classes from "./Search.module.css";
import { Search_URL } from "@/app/constant";
import { SidebarContext } from "@/lib/contexts/SidebarContext";

Modal.setAppElement("body");

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const Search: React.FC<SearchProps> = ({ isOpen, onClose }) => {
  const [searchData, setSearchData] = useState("");
  const [data, setData] = useState([]);

  const sidebarContext = useContext(SidebarContext);

  const handleRow = (game: any) => {
    console.log("Row Clicked", game.id);

    if (sidebarContext) {
      sidebarContext.updateContext(game.id);
    }

    setData([]);
    setSearchData("");
    onClose();
  };

  const handleClose = () => {
    setData([]);
    setSearchData("");
    onClose();
  };

  useEffect(() => {
    if (searchData == "") {
      setData([]);
    }

    if (searchData === "" || searchData.length < 3) return;
    fetch(`${Search_URL}?q=${searchData}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [searchData]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={classes.modalContent}
      overlayClassName={classes.modalOverlay}
    >
      <div className={classes.modalHeader}>
        <h2>Search Games</h2>
        <div onClick={handleClose}>
          <button onClick={onClose} className={classes.closeButton}>
            &times;
          </button>
        </div>
      </div>
      <div className={classes.modalBody}>
        <input
          type="text"
          placeholder="Search for games..."
          className={classes.searchInput}
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
      </div>
      <div className={classes.content}>
        {data &&
          data.map((game: any) => (
            <div
              key={game.id}
              className={classes.row}
              onClick={() => handleRow(game)}
            >
              {game.name}
            </div>
          ))}
      </div>
    </Modal>
  );
};

export default Search;
