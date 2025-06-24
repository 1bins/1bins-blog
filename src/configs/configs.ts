import { HiOutlineClipboardList } from 'react-icons/hi';
import { MdSpaceDashboard } from "react-icons/md";

// admin menu
export const AdminMenu = [
  {
    title: 'Board',
    link: '/admin/post',
    icon: HiOutlineClipboardList,
    iconSize: 18,
  },
  {
    title: 'Dashboard',
    link: '/admin',
    icon: MdSpaceDashboard,
    iconSize: 18,
  }
];

// blog categories
export const Categories = [
  'HTML',
  'CSS/SCSS',
  'Javascript',
  'Typescript',
  'React',
  'Next',
  '회고록'
];