import React, { useState } from 'react';
import type { NextPage } from 'next';
import { TabContext, TabPanel } from '@mui/lab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Banner from '../components/Banner/Banner';
import Rating from '../components/Rating/Rating';
import Product from '../components/Products/Product';

const Home: NextPage = () => {
    const [value, setValue] = useState('2');

    const handleChangeTab = (event, newValue:any) => {
        setValue(newValue);
    };

    return (
        <>
            <Banner />
            <Rating />
            <TabContext value={value}>
                <Box
                    sx={{ width: '100%' }}
                    className="sticky top-[65px] z-30 pb-1 mb-2 bg-white"
                >
                    <Tabs value={value} onChange={handleChangeTab} centered>
                        <Tab
                            sx={{ borderBottom: 0.5, borderColor: 'divider' }}
                            className="font-sans text-sm font-semibold border-b-2 lg:w-1/4 outline-2"
                            label="Kategori"
                            value="1"
                        />
                        <Tab
                            sx={{ borderBottom: 0.5, borderColor: 'divider' }}
                            className="font-sans text-sm font-semibold border-b-2 lg:w-1/4"
                            label="Semua produk"
                            value="2"
                        />
                        <Tab
                            sx={{ borderBottom: 0.5, borderColor: 'divider' }}
                            className="font-sans text-sm font-semibold border-b-2 lg:w-1/4"
                            label="diskon"
                            value="3"
                        />
                    </Tabs>
                </Box>
                <TabPanel value="1">
                    Item 1
                </TabPanel>
                <TabPanel value="2">
                    <div className="z-20 w-full p-2 mx-auto sm:p-0 lg:w-3/4">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value="3">
                    Item Three
                </TabPanel>
            </TabContext>

            <div className="flex justify-center">
                <button type="button" className="py-2 px-4 rounded-md bg-slate-700 text-white">More</button>
                {/* <ModalSort /> */}
            </div>
        </>
    );
};

export default Home;
