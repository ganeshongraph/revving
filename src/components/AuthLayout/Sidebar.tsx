import React, { useState, useEffect } from 'react';
import ScrollBar from 'react-perfect-scrollbar';
import { useHistory, Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemText, Collapse, Typography } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons/';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { SidebarWrapper, ListStyled, ListItemStyled } from './Styled';

const FixedSidebar = () => {
  const [open, setOpen] = useState('');
  const [activeTab, setActiveTab] = useState('');
  const history = useHistory();

  useEffect(() => {
    const { location } = history;
    if (location.pathname.includes('account')) {
      setOpen('account');
    }
  }, [history]);

  // Handle expand open
  const handleClick = (type: string) => {
    type !== open ? setOpen(type) : setOpen('');
  };

  // Handle sidebar click
  const handleSideBarClick = (ingestion: string) => {
    setActiveTab(ingestion);
    history.push(`/${ingestion}`);
  };

  const isOwner = localStorage.getItem('owner') === 'true';

  const locationUrl = history.location.pathname;
  return (
    <>
      <SidebarWrapper>
        <Box height='100%' display='flex' flexDirection='column' className={activeTab}>
          <Link to='' className='sidebarLogo'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/Revving_Master-Logo.svg`}
              alt='logo'
              className='sidebarLogoImg'
            />
          </Link>
          <ScrollBar>
            <Box>
              <Typography variant='h6' className='ltdText'>
                Pogo Ltd
              </Typography>
              <ListStyled aria-labelledby='nested-list-subheader'>
                <ListItem
                  className={locationUrl.includes('funding') ? 'active' : ''}
                  button
                  onClick={() => handleSideBarClick('funding')}
                >
                  <ListItemText primary='Funding' />
                </ListItem>
                <ListItem
                  className={locationUrl.includes('advance-ledger') ? 'active' : ''}
                  button
                  onClick={() => handleSideBarClick('advance-ledger')}
                >
                  <ListItemText primary='Advance Ledger' />
                </ListItem>
                <ListItem
                  className={locationUrl.includes('transactions') ? 'active' : ''}
                  button
                  onClick={() => handleSideBarClick('transactions')}
                >
                  <ListItemText primary='Transactions' />
                </ListItem>

                <ListItemStyled
                  button
                  onClick={() => handleClick('account')}
                  className={locationUrl.includes('account') ? 'active' : ''}
                >
                  <ListItemText primary='Account' />
                  {open === 'account' ? <ExpandLess /> : <ExpandMore />}
                </ListItemStyled>
                <Collapse
                  in={open === 'account'}
                  timeout='auto'
                  unmountOnExit
                  className={open === 'account' ? 'activeBG' : ''}
                >
                  <List component='div' disablePadding>
                    <ListItem
                      className={locationUrl.includes('integrations') ? 'active' : ''}
                      button
                      onClick={() => handleSideBarClick('account/integrations')}
                    >
                      <ListItemText primary='Integrations' />
                    </ListItem>

                    <ListItem
                      className={locationUrl.includes('fees') ? 'active' : ''}
                      button
                      onClick={() => handleSideBarClick('account/fees')}
                    >
                      <ListItemText primary='Fees' />
                    </ListItem>
                    <ListItem
                      className={locationUrl.includes('documentation') ? 'active' : ''}
                      button
                      onClick={() => handleSideBarClick('account/documentation')}
                    >
                      <ListItemText primary='Documentation' />
                    </ListItem>
                    <ListItem
                      className={locationUrl.includes('business-details') ? 'active' : ''}
                      button
                      onClick={() => handleSideBarClick('account/business-details')}
                    >
                      <ListItemText primary='Business details' />
                    </ListItem>
                    {isOwner && (
                      <ListItem
                        className={locationUrl.includes('administration') ? 'active' : ''}
                        button
                        onClick={() => handleSideBarClick('account/administration')}
                      >
                        <ListItemText primary='Administration' />
                      </ListItem>
                    )}
                  </List>
                </Collapse>
              </ListStyled>
            </Box>
          </ScrollBar>
        </Box>
      </SidebarWrapper>
    </>
  );
};

export default FixedSidebar;
