import { useAutocomplete } from "@mui/base/useAutocomplete";
import { IconButton, InputBase } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../assets/search-icon.svg";
import DropDown from "./DropDown";
import styles from "./Search.module.css";

function Search({ searchData, placeholder, sx, maxWidth }) {
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const [searchWidth, setSearchWidth] = useState(null);
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: searchData || [],
    getOptionLabel: (option) => option.title,
    getOptionKey: (option) => option.id,

    // for whole obj input
    value,
    onChange: (_, newValue) => setValue(newValue),

    // for text input
    inputValue,
    onInputChange: (e, newInputValue) => {
      setInputValue(newInputValue);
      setOpen(newInputValue.length > 0);
    },
    isOptionEqualToValue: (opt, val) => opt.id === val?.id,

    // to avoid auto open on click
    open,
    onOpen: () => {}, // prevent auto-open
    onClose: () => setOpen(false),
  });

  useEffect(() => {
    if (searchRef.current) {
      setSearchWidth(searchRef.current.offsetWidth);
    }
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        justifyContent: "center",
        ...sx,
      }}
    >
      <Box
        sx={{
          width: "100%",
          transition: "max-width 0.3s ease",
          ...maxWidth,
        }}
        ref={searchRef}
      >
        <Box {...getRootProps()}>
          <Box
            component="form"
            className={styles.wrapper}
            onSubmit={(e) => {
              e.preventDefault();
              if (value) navigate(`/albumdetails/${value.id}`);
            }}
          >
            <InputBase
              name="album"
              className={styles.search}
              placeholder={placeholder}
              inputComponent="input"
              required
              inputProps={getInputProps()}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={() => setOpen(false)}
            />
            <IconButton type="submit" className={styles.searchButton}>
              <Box
                component="img"
                src={SearchIcon}
                alt="search-icon"
                sx={{ height: "18px" }}
              />
            </IconButton>
          </Box>

          <DropDown
            getListboxProps={getListboxProps}
            groupedOptions={groupedOptions}
            getOptionProps={getOptionProps}
            searchWidth={searchWidth}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Search;
