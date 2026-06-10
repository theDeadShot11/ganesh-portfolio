import { useState } from "react";
import { motion } from "framer-motion";

const IMAGE_SRC = "/avatar-operative.png";

const floatTransition = {
  duration: 6,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
};

export default function Avatar() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="relative mx-auto flex h-[560px] w-full max-w-[560px] items-center justify-center overflow-visible">
      {/* Ambient glow */}
      <motion.div
        className="absolute h-[440px] w-[440px] rounded-full bg-emerald-500/10 blur-3xl"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Outer orbit */}
      <motion.div
        className="absolute h-[470px] w-[470px] rounded-full border border-emerald-400/15"
        animate={{ rotate: 360 }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span className="absolute left-16 top-10 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(34,197,94,0.9)]" />
        <span className="absolute bottom-20 right-8 h-2 w-2 rounded-full bg-emerald-300/80 shadow-[0_0_16px_rgba(34,197,94,0.8)]" />
      </motion.div>

      {/* Inner orbit */}
      <motion.div
        className="absolute h-[390px] w-[390px] rounded-full border border-dashed border-emerald-500/15"
        animate={{ rotate: -360 }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Grid background */}
      <div className="absolute inset-8 rounded-[2rem] border border-emerald-400/10 bg-[linear-gradient(rgba(34,197,94,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[size:38px_38px] opacity-70" />

      {/* Main avatar card */}
      <motion.div
        className="relative z-10 h-[430px] w-[430px] overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-[#07100C]/80 shadow-[0_35px_100px_rgba(34,197,94,0.18)] backdrop-blur-xl"
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        whileHover={{ scale: 1.025 }}
      >
        {!imageFailed ? (
          <motion.img
            src={IMAGE_SRC}
            alt="Premium techno-functional analyst avatar"
            className="h-full w-full object-cover"
            onError={() => setImageFailed(true)}
            animate={{ scale: [1, 1.035, 1] }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#06100C] via-[#0D1711] to-black">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border border-emerald-400/25 bg-emerald-400/10 text-4xl font-bold text-emerald-300">
                G
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/60">
                Avatar Missing
              </p>
              <p className="mt-2 text-xs text-emerald-100/40">
                Add avatar-operative.png to public/
              </p>
            </div>
          </div>
        )}

        {/* Dark premium overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

        {/* Green edge highlight */}
        <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-emerald-300/10" />

        {/* Bottom identity strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-emerald-400/10 bg-black/45 px-5 py-4 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.26em] text-emerald-300/70">
            Techno-Functional Analyst
          </p>
          <p className="mt-1 text-sm text-emerald-50/65">
            Strategy → Data → Delivery
          </p>
        </div>
      </motion.div>

      {/* Availability badge */}
      <motion.div
        className="absolute left-0 top-16 z-20 rounded-2xl border border-emerald-400/20 bg-[#07100C]/80 px-4 py-3 text-sm text-emerald-300 shadow-[0_0_35px_rgba(34,197,94,0.14)] backdrop-blur-xl"
        animate={{ y: [-7, 8, -7] }}
        transition={floatTransition}
      >
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(34,197,94,0.9)]" />
          <span className="font-medium tracking-wide">Available</span>
        </div>
      </motion.div>

      {/* Impact card */}
      <motion.div
        className="absolute -right-16 top-20 z-20 w-44 rounded-3xl border border-emerald-400/20 bg-[#07100C]/80 p-4 shadow-[0_0_45px_rgba(34,197,94,0.14)] backdrop-blur-xl"
        animate={{ y: [8, -8, 8] }}
        transition={{ ...floatTransition, duration: 6.5 }}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-emerald-200/45">
          Impact
        </p>

        <div className="mt-2 flex items-end gap-2">
          <span className="text-4xl font-semibold text-emerald-400">30%</span>
          <span className="pb-1 text-sm text-emerald-100/55">
            faster load
          </span>
        </div>

        <div className="mt-3 flex items-end gap-1.5">
          {[32, 46, 58, 42, 64, 78].map((height, index) => (
            <motion.span
              key={index}
              className="w-3 rounded-full bg-emerald-400/40"
              style={{ height }}
              animate={{ opacity: [0.35, 0.95, 0.35] }}
              transition={{
                duration: 2.8,
                delay: index * 0.18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Core stack card */}
      <motion.div
        className="absolute -bottom-2 -left-10 z-20 w-56 rounded-3xl border border-emerald-400/20 bg-[#07100C]/80 p-4 shadow-[0_0_45px_rgba(34,197,94,0.14)] backdrop-blur-xl"     
         animate={{ y: [7, -8, 7] }}
        transition={{ ...floatTransition, duration: 5.8 }}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-emerald-200/45">
          Core Stack
        </p>

        {[
          ["Business Analysis", "92%"],
          ["Analytics", "88%"],
          ["Delivery", "84%"],
        ].map(([label, value]) => (
          <div key={label} className="mt-3">
            <div className="mb-1 flex justify-between text-xs text-emerald-100/60">
              <span>{label}</span>
              <span>{value}</span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-emerald-950/80">
              <motion.div
                className="h-full rounded-full bg-emerald-400"
                initial={{ width: 0 }}
                whileInView={{ width: value }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Mission card */}
      <motion.div
        className="absolute bottom-10 -right-14 z-20 rounded-2xl border border-emerald-400/15 bg-[#07100C]/75 px-4 py-3 backdrop-blur-xl"     
         animate={{ x: [-5, 5, -5], y: [4, -4, 4] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/45">
          Mission Efficiency
        </p>
        <p className="mt-1 text-2xl font-semibold text-emerald-400">92.4%</p>
      </motion.div>

      {/* Bottom shine */}
      <motion.div
        className="absolute bottom-8 h-16 w-80 rounded-full bg-emerald-400/10 blur-2xl"
        animate={{
          scaleX: [0.85, 1.08, 0.85],
          opacity: [0.18, 0.38, 0.18],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}