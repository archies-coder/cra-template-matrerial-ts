import React, { FunctionComponent } from 'react';
import { Button, createStyles, Fade, Link, Menu, MenuItem, Theme, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { Link as NavLink, Redirect, RouteComponentProps } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { doLogout } from 'features/auth/AuthSlice';
import { RootState } from 'app/rootReducer';
import { CustomMenuItem } from './CustomMenuItem';
import { enableSaveButton } from 'features/Home/visitorSlice';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            textAlign: 'right',
            margin: '18px 20px 15px 0',
            fontSize: '20px',
            fontWeight: 300,
            '& > *': {
                color: theme.palette.text.primary,
            },
            '& > * + *': {
                marginLeft: '55px',
                color: theme.palette.text.primary,
            },
            '& .MuiSvgIcon-root': {
                fontSize: '25px'
            },
            '& .MuiTypography-root, & .makeStyles-root-59, & .MuiTypography-body1': {
                height: '25px !important'
            }
        },
        navLink: {
            color: theme.palette.text.primary,
            textDecoration: 'none'
        },
        navItem: {
            verticalAlign: 'top',
            color: theme.palette.text.primary,
        },
        profileName: {
            verticalAlign: 'text-bottom',
            fontWeight: 600,
            marginRight: '25px'
        }
    }),
);

interface OwnProps {
}

type Props = OwnProps;

const NavigationBar: FunctionComponent<Props> = (props) => {
    const classes = useStyles()

    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const { name } = useSelector((state: RootState) => state.auth)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        // dispatch(logout())
        setAnchorEl(null);
        // TODO due to 2 different route objects, logout is not working
    };

    const handleLogout = () => {
        dispatch(doLogout())
        handleClose()

    };
    return (
        <Typography className={classes.root}>
            <Link variant="h6" color="textSecondary">
                <NavLink to="/visitor" className={classes.navLink} onClick={() => dispatch(enableSaveButton())}>
                    <ExitToAppIcon /> <span className={classes.navItem}>Check In</span>
                </NavLink>
            </Link>
            <Link variant="h6" color="textSecondary">
                <NavLink to="/invites/visitor" className={classes.navLink}>
                    <PersonIcon /> <span className={classes.navItem}>Invite</span>
                </NavLink>
            </Link>
            <Link href="#" variant="h6" color="textSecondary">
                <NavLink to="/notification" className={classes.navLink}>
                    <NotificationsActiveIcon /> <span className={classes.navItem}>Notification</span>
                </NavLink>
            </Link>
            <Link href="#" variant="h5" color="textSecondary">
                <span
                    className={classes.profileName}
                    aria-controls="fade-menu"
                    aria-haspopup="true"
                    onClick={handleClick}>
                    {name}
                </span>
            </Link>
            {/* Open with fade transition */}
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                elevation={1}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleLogout}>
                    <CustomMenuItem to="/logout">Logout</CustomMenuItem>
                    </MenuItem>
            </Menu>
        </Typography>
    );
};

export default NavigationBar;
