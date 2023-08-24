import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import axios from 'axios';

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));
const ImageDisplay = ({ imageUrl }) => {
    const imageStyle = {
        width: `15%`,
        height: '15%',
    };

    return <img src={imageUrl} alt="" style={imageStyle} />;
};


export default function MintedNFTs() {
    const [mintedNftsData, setMintedNftsData] = useState(null);

    const fetchMintedNfts = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}/client/mintednfts`)
            .then((response) => {
                setNftsData(response.data)
                console.log(response.data)
            }).catch((error) => {
                console.log(error)
            })
    };

    // const handleDelete = async (asgnId, lecId) => {
    //     await axios.post(`${process.env.REACT_APP_API_URL}/client/assignment/delete`, {
    //         asgnId: asgnId,
    //         lectureId: lecId

    //     })
    //         .then((response) => {
    //             console.log(response.data)
    //             setAsgnData(asgnData.filter((asgn) => asgn._id !== asgnId));
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    // };



    useEffect(() => {
        fetchMintedNfts();
    }, [])

    // console.log(asgnData)
    return (

        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            {/* <Button
                variant="contained"
                component={Link}
                to={"/assignments/add"}
            >
                Add Assignment
            </Button> */}
            <Demo>
                <List >
                    {nftsData?.map((item) => (
                        // create a list of lectures with link to lecture details
                        <ListItem
                            key={item._id}
                        // secondaryAction={
                        //     <Tooltip title="Delete" arrow>
                        //         <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item._id)}>
                        //             <DeleteIcon />
                        //         </IconButton>
                        //     </Tooltip>
                        // }
                        >
                            <ImageDisplay imageUrl={item.image} />
                            <ListItemAvatar>
                                <Avatar>
                                    <QuestionAnswerIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.title}
                            />
                        </ListItem>)
                    )}
                </List>
            </Demo>
        </Box>
    );
}