import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import { styled } from "@mui/system";
import { truncate } from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";
import { Stack } from '@mui/material';

const Listbox = styled("ul")({
    width: "100%",
    margin: 0,
    padding: 0,
    position: "absolute",
    borderRadius: "0px 0px 10px 10px",
    border: "1px solid var(--color-primary)",
    height: "max-content",
    maxHeight: "300px",
    zIndex: 10,
    overflowY: "auto",
    listStyle: "none",
    backgroundColor: "var(--color-black)",
    color: 'white',
    "& li.Mui-focused": {
        backgroundColor: "#4a8df6",
        color: "white",
        cursor: "pointer",
    },
    "& li:active": {
        backgroundColor: "#2977f5",
        color: "white",
    },
});

function Search({ searchData, placeholder }) {
    const {
        getRootProps,
        getInputLabelProps,
        value,
        getInputProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
    } = useAutocomplete({
        id: "use-autocomplete-demo",
        options: searchData || [],
        getOptionLabel: (option) => option.title,
    });

    const navigate = useNavigate();
    const onSubmit = (e, value) => {
        e.preventDefault();
        console.log(value);
        navigate(`/album/${value.slug}`);
    };

    return (
        <div style={{ position: "relative" }}>
            <form
                className={styles.wrapper}
                onSubmit={(e) => onSubmit(e, value)}
            >
                <div {...getRootProps()}>
                    <input
                        name="album"
                        className={styles.search}
                        placeholder={placeholder}
                        required
                        {...getInputProps()}
                    />
                </div>
                <div>
                    <button className={styles.searchButton} type="submit">
                        <SearchIcon />
                    </button>
                </div>
            </form>
            {groupedOptions.length > 0 && (
                <Listbox {...getListboxProps()}>
                    {groupedOptions.map((option, index) => {
                        const artists = option.songs.reduce((accumulator, currentValue) => {
                            accumulator.push(...currentValue.artists);
                            return accumulator;
                        }, []);

                        return (
                            <li
                                key={option.slug}
                                {...getOptionProps({ option, index })}
                                onClick={() => {
                                    onSubmit(null, option);
                                }}
                                className={styles.listElement}
                            >
                                <Stack sx={{textAlign: 'left' }}>
                                    <span className={styles.albumTitle}>{option.title}</span>
                                    <span className={styles.albumArtists}>
                                        {truncate(artists.join(", "), 40)}
                                    </span>
                                </Stack>
                            </li>
                        );
                    })}
                </Listbox>
            )}
        </div>
    );
}

export default Search;
