import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getLauncheDetail, getRocket} from "../../redux/launchesDuck";
import {useDispatch} from "react-redux";

const LauncheDetail = () => {
    const {id} = useParams();
    console.log(id);
    const dispatch = useDispatch();
    const getDetails = async (id) => {
        try {
            const {rocket} = await dispatch(getLauncheDetail(id))
            await dispatch(getRocket(rocket))
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getDetails(id)
    }, [])

    return (
        <h2>Detail</h2>
    )
}

export default LauncheDetail