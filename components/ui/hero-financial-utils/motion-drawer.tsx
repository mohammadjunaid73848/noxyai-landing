'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface MotionDrawerProps {
  direction?: 'left' | 'right' | 'top' | 'bottom';
  width?: number | string;
  backgroundColor?: string;
  clsBtnClassName?: string;
  contentClassName?: string;
  btnClassName?: string;
  children?: React.ReactNode;
}

export const MotionDrawer: React.FC<MotionDrawerProps> = ({
  direction = 'left',
  width = 300,
  backgroundColor = '#ffffff',
  clsBtnClassName = '',
  contentClassName = '',
  btnClassName = '',
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const slideVariants = {
    closed: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'top' ? '-100%' : direction === 'bottom' ? '100%' : 0,
    },
    open: { x: 0, y: 0 },
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={btnClassName || 'p-2 rounded-full border bg-white text-black'}
        aria-label="Open Navigation Menu"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            />

            {/* Drawer Panel */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={slideVariants}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{ width, backgroundColor }}
              className={`relative z-10 h-full p-6 shadow-2xl flex flex-col ${contentClassName}`}
            >
              <button
                onClick={() => setIsOpen(false)}
                className={`absolute top-4 right-4 p-2 rounded-full transition ${clsBtnClassName}`}
                aria-label="Close Navigation Menu"
              >
                <X size={20} />
              </button>

              <div className="mt-8">{children}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MotionDrawer;
