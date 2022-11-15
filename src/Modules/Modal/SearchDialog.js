import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";

import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import SearchItemLoading from "./SearchDialog-components/SearchItemLoading";
import apiClient from "../../api";
import { backendServerPath } from "../common/utils/backendServerPath";
import Item from "./SearchDialog-components/searchItem-utils/Item";
import SearchItem from "./SearchDialog-components/SearchItem";

export default function SearchDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setError("");
    setEmptyResult("");
    setSearchedItems([]);
    setKeyword("");
    setOpen(false);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [emptyResult, setEmptyResult] = useState("");
  const [error, setError] = useState("");

  const [searchedItems, setSearchedItems] = useState([]);

  const keywordOnChangeHandler = (e) => {
    setError("");
    setEmptyResult("");
    setSearchedItems([]);
    setKeyword(e.target.value);
  };

  const fetchSearchResult = useCallback(async () => {
    setIsLoading(true);

    setTimeout(async () => {
      try {
        await apiClient.get("/sanctum/csrf-cookie");
        const response = await apiClient.get(
          `api/product-search/${keyword.length > 2 ? keyword : ""}`
          // tokenHeaderConfig
        );

        if (response.data.length === 0) {
          setEmptyResult("Không có sản phẩm đúng theo yêu cầu của bạn.");
        }

        const transformedItems = response.data.map((item) => {
          return new Item(
            item.id,
            item.name,
            backendServerPath + item.kinds[0].image_1,
            item.price
          );
        });
        setSearchedItems(transformedItems);
      } catch (error) {
        setError("Đã có lỗi xảy ra");
      }
      setIsLoading(false);
    }, 2000);
  }, [keyword]);

  useEffect(() => {
    if (keyword.length > 2) {
      const getData = setTimeout(fetchSearchResult, 2000);
      return () => clearTimeout(getData);
    }
  }, [fetchSearchResult, keyword.length]);

  return (
    <>
      <IconButton
        color="customTransparent"
        size={props.smallScreenMatch ? "large" : "medium"}
        sx={{
          color:
            props.notTriggeredCase || props.triggeredCase
              ? "#f4f1e0"
              : "#321e1e",
          transition: "all 0.3s",
        }}
        onClick={handleClickOpen}
      >
        <SearchIcon />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        sx={{ ".MuiDialog-container": { alignItems: "baseline" } }}
        PaperProps={{ sx: { backgroundColor: "#f4f1e0" } }}
      >
        {/*<DialogTitle>Tìm kiếm</DialogTitle>*/}
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="search"
            type="text"
            fullWidth
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={keywordOnChangeHandler}
            placeholder="Hãy nhập tên sản phẩm vào ô tìm kiếm"
            sx={{ mb: 3 }}
          />
          {/*<DialogContentText sx={{ mb: 3 }}>*/}
          {/*</DialogContentText>*/}
          <Box
            sx={{
              height: `${keyword.length > 3 ? "68vh" : undefined}`,
              border: "1px solid #eee",
              transition: "height 0.3s",
            }}
          >
            {isLoading && (
              <>
                <SearchItemLoading />
                <SearchItemLoading />
                <SearchItemLoading />
              </>
            )}
            {error.length > 0 && error}
            {emptyResult.length > 0 && emptyResult}
            {searchedItems.length > 0 &&
              searchedItems.map((item, index) => {
                return <SearchItem product={item} key={index} />;
              })}
            {/*<SearchItem />*/}
            {/*<SearchItemLoading />*/}
          </Box>
        </DialogContent>
        {/*<DialogActions>*/}
        {/*  <Button onClick={handleClose}>Cancel</Button>*/}
        {/*  <Button onClick={handleClose}>Subscribe</Button>*/}
        {/*</DialogActions>*/}
      </Dialog>
    </>
  );
}
