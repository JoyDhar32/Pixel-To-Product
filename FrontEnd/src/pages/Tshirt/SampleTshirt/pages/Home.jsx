import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../../../../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../../../../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            {/* <img 
              src='./p2p.png'
              alt="logo"
              className="w-32 h-16 object-contain"
            /> */}
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text text-[#7AE1E6]">
                LET'S <br className="xl:block hidden" /> Customize
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-white text-base">
              Experience Shopping in Every Dimension <strong>Elevate Your Online Buying</strong>With Next Generation Ecommerce
              </p>

              <CustomButton 
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home