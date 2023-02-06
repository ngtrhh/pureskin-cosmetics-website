import {
  BsCart2,
  BsPerson,
  BsChevronDown,
  BsChevronUp,
  BsChevronLeft,
  BsChevronRight,
  BsTruck,
  BsHeart,
  BsHeartFill,
} from "react-icons/bs";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineSwap } from "react-icons/ai";
import { RiShieldStarLine } from "react-icons/ri";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { GitHub, Instagram } from "@mui/icons-material";
import { IoClose, IoBookmarkSharp } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";

const CartIcon = () => {
  return <BsCart2 size={28} />;
};

const SearchIcon = (props) => {
  return <AiOutlineSearch size={props.size} />;
};

const MenuIcon = () => {
  return <AiOutlineMenu size={28} />;
};

const AccountIcon = () => {
  return <BsPerson size={28} />;
};

const DownIcon = () => {
  return <BsChevronDown size={12} />;
};

const UpIcon = (props) => {
  return <BsChevronUp size={12} style={{ color: props.color }} />;
};

const LeftIcon = (props) => {
  return <BsChevronLeft size={props.size} />;
};

const RightIcon = (props) => {
  return <BsChevronRight size={props.size} />;
};

const CloseIcon = () => {
  return <IoClose size={28} />;
};

const FacebookIcon = (props) => {
  return <FacebookRoundedIcon color="primary" sx={{ fontSize: props.size }} />;
};

const InstagramIcon = (props) => {
  return <Instagram sx={{ fontSize: props.size }} />;
};

const GitHubIcon = (props) => {
  return <GitHub sx={{ fontSize: props.size }} />;
};

const TruckIcon = () => {
  return <BsTruck size={80} />;
};

const SwapIcon = () => {
  return <AiOutlineSwap size={80} />;
};

const ShieldIcon = () => {
  return <RiShieldStarLine size={80} />;
};

const SupportIcon = () => {
  return <MdSupportAgent size={80} />;
};

const HeartOutline = () => {
  return <BsHeart size={24} />;
};

const HeartFill = () => {
  return <BsHeartFill size={24} />;
};

const BookmarkIcon = () => {
  return <IoBookmarkSharp size={72} />;
};

export {
  CartIcon,
  SearchIcon,
  MenuIcon,
  AccountIcon,
  DownIcon,
  UpIcon,
  LeftIcon,
  RightIcon,
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  GitHubIcon,
  TruckIcon,
  SwapIcon,
  ShieldIcon,
  SupportIcon,
  HeartOutline,
  HeartFill,
  BookmarkIcon,
};
