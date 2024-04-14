import React from 'react';
import { AppBar, Tab, Tabs, Typography } from '@mui/material';
import TabPanel from './TabPanel';
import LeaveList from './LeaveList';
import ExtraList from './ExtraList';
import RegularList from './RegularList';

function TabLayout() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example " centered='true'
                    sx={{ backgroundColor: '#fff', fontFamily: 'Arial, sans-serif', display: 'flex', justifyContent: 'space-evenly w-fit' }}
                    TabIndicatorProps={{
                        style: { backgroundColor: '#0000FF', color: "#0000ff" } // Change the color of the tab indicator
                    }}>
                    <Tab label="Leave History" sx={{ color: '#000', textTransform: 'capitalize', fontSize: '18px', marginX: '12px', width: '30%', overflowy: "scroll"  }} />
                    <Tab label="Extra History" sx={{ color: '#000', textTransform: 'capitalize', fontSize: '18px', marginX: '12px',width: '30%', }} />
                    <Tab label="Regular Meals" sx={{ color: '#000', textTransform: 'capitalize', fontSize: '18px', marginX: '12px',width: '30%', }} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} className='h-[40vh] overflow-y-scroll '>
                    <LeaveList />
            </TabPanel>
            <TabPanel value={value} index={1} className='h-[40vh] overflow-y-scroll '>
                <ExtraList/>
            </TabPanel>
            <TabPanel value={value} index={2} className='h-[40vh] overflow-y-scroll '>
                <RegularList/>
            </TabPanel>
        </div>
    );
}

export default TabLayout;