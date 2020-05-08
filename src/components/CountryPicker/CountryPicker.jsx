import React,{useState,useEffect} from 'react'
import {NativeSelect, FormControl}  from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api/';


function CountryPicker() {

const [fetchCountries, setFetchCountries] = useState([]);
    useEffect(() => { 
        const fetchAPI = async() => {
            setFetchCountries(await fetchCountries );
        }
        fetchAPI();
    },[setFetchCountries]);

    console.log(fetchCountries);

    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect>
                    <option value="global">Global</option>
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker
