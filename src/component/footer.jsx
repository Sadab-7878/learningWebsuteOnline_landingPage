import React from "react";
import Icon from '../assets/footer/icon.svg'
import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs'

const footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto mt-40 mb-2">
      <footer className="footer p-10 bg-[#F8FAFE] text-neutral-content rounded-3xl justify-center gap-44">
        <div>
          <span className="footer-title">
            <img src={Icon} alt="" />
          </span>
          <a className="link link-hover text-[#666680]">Branding</a>
          <a className="link link-hover text-[#666680]">Design</a>
          <a className="link link-hover text-[#666680]">Marketing</a>
          <a className="link link-hover text-[#666680]">Advertisement</a>
        </div>
        <div>
          <span className="footer-title text-[#666680]">Company</span>
          <a className="link link-hover text-[#666680]">About us</a>
          <a className="link link-hover text-[#666680]">Contact</a>
          <a className="link link-hover text-[#666680]">Jobs</a>
          <a className="link link-hover text-[#666680]">Press kit</a>
        </div>
        <div>
          <span className="footer-title text-[#666680]">Legal</span>
          <a className="link link-hover text-[#666680]">Terms of use</a>
          <a className="link link-hover text-[#666680]">Privacy policy</a>
          <a className="link link-hover text-[#666680]">Cookie policy</a>
        </div>

        <div>
          <span className="footer-title text-[#666680]">Product</span>
          <a className="link link-hover text-[#666680]">About us</a>
          <a className="link link-hover text-[#666680]">Contact</a>
          
        </div>


        <div>
          <span className="footer-title text-[#666680] flex gap-5">
            <BsFacebook className="text-blue-800"/>
            <BsTwitter className="text-sky-500"/>
            <BsInstagram className="text-red-600"/>
          </span>
          
          
        </div>
      </footer>
    </div>
  );
};

export default footer;
