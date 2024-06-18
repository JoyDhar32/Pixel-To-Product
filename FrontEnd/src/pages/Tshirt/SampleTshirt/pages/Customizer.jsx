import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import config from "../../../../config/config";
import state from "../../../../store";
import { download } from "../../../../assets";
import { downloadCanvasToImage, reader } from "../../../../config/helpers";
import {
  EditorTabs,
  FilterTabs,
  DecalTypes,
} from "../../../../config/constants";
import { fadeAnimation, slideAnimation } from "../../../../config/motion";
import {
  AIPicker,
  ColorPicker,
  CustomButton,
  FilePicker,
  Tab,
} from "../components";
import { useNavigate } from "react-router-dom";

const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState("");

  const [prompt, setPrompt] = useState("");
  const [generatingImg, setGeneratingImg] = useState(false);

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  // show tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      case "aipicker":
        return (
          <AIPicker
            prompt={prompt}
            setPrompt={setPrompt}
            generatingImg={generatingImg}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  const handleSubmit = async (type) => {
    // if(!prompt) return alert("Please enter a prompt");
    // try {
    //   setGeneratingImg(true);
    //   const response = await fetch('http://localhost:8080/api/v1/dalle', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       prompt,
    //     })
    //   })
    //   const data = await response.json();
    //   handleDecals(type, `data:image/png;base64,${data.photo}`)
    // } catch (error) {
    //   alert(error)
    // } finally {
    //   setGeneratingImg(false);
    //   setActiveEditorTab("");
    // }
  };

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];
    state[decalType.stateProperty] = result;
    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    // after setting the state, activeFilterTab is updated

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName],
      };
    });
  };

  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab("");
    });
  };

  const [size, setSize] = useState("S");
  const [price, setPrice] = useState(49.99);
  const [productName, setProductName] = useState("Customized_Unisex_Tshirt");
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  const handleSizeChange = (e) => {
    e.preventDefault();
    setSize(e.target.value);
  };
  const handleQtyChange = (e) => {
    e.preventDefault();
    setQty(e.target.value);
  };
  const OrderSubmitted = (e) => {
    e.preventDefault();
    const data={
      shoeSize: size,
      shoeQty: qty,
      productName: productName,
      productPrice: price * qty,

    }
    navigate("/shipping", { state: data });
    

  };
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}

                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}
            {/* Download button */}
            <button className="download-btn" onClick={downloadCanvasToImage}>
              <img
                src={download}
                alt="download_image"
                className="w-3/5 h-3/5 object-contain"
              />
            </button>

            <select
              value={size}
              onChange={handleSizeChange}
              className=" download-btn text-orange-900 text-center font-bold bg-blue-500 "
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <select
              value={qty}
              onChange={handleQtyChange}
              className=" download-btn text-orange-900 text-center font-bold bg-blue-500 "
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
             
            </select>
            {/* Download button */}
            <button className="download-btn" onClick={OrderSubmitted}>
              <img
                src="/images/orderNow.png"
                alt="download_image"
                className="w-3/5 h-3/5 object-contain"
              />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
