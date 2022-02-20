// import LogoutIcon from "@mui/icons-material/Logout";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

export const projects = [
  {
    id: 1,
    title: 'Earthquake',
    img: 'https://cdn.britannica.com/92/182392-050-40211611/Brick-debris-earthquake-street-aftermath-Bhaktapur-Nepal-April-25-2015.jpg',
    donations: 6000,
    status: 'active',
  },
  {
    id: 2,
    title: 'Fire',
    img: 'https://www.nepalitimes.com/wp-content/uploads/2021/01/Manang-forest-fires-NT-1.jpg',
    donations: 4000,
    status: 'active',
  },
  {
    id: 3,
    title: 'Landslide',
    img: 'https://www.thethirdpole.net/content/uploads/2014/08/Sindhupalchowk-landslide-Nepal.jpg',
    donations: 2000,
    status: 'active',
  },
];

export const dropDownMenu = [
  {
    title: 'Transactions',
    icon: <CompareArrowsIcon />,
    path: '/transaction',
  },
  // {
  //   title: "Logout",
  //   icon: <LogoutIcon />,
  //   path: "",
  // },
];
export const getToken = () => {
  return localStorage.getItem('access-token');
};
export const getUserEmail = () => {
  return localStorage.getItem('userLoggedIn');
};
