import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { socials } from "../data/social";

const SocialMedia = () => {
  return (
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="md:absolute md:left-0 my-2 ml-4 md:p-8"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social.id}
            url={social.url}
            fgColor="#fff"
            target="_blank"
            style={{ height: 35, width: 35 }}
            className="mx-2 hover:scale-150 my-1"
          />
        ))}
      </motion.div>
  );
};

export default SocialMedia;
