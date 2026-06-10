import { useState } from "react";
import { motion } from "framer-motion";

const IMAGE_SRC = "/avatar-operative.png";

const floatTransition = {
  duration: 6,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
};

function SkillBar({ label, value }) {
  return (
    <div className="mt-3">
      <div className="mb-1 flex items-center justify-between text-xs text-emerald-100/65">
        <span>{label}</span>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-emerald-950/80">
        <motion.div
          className="h-full rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.45)]"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Avatar() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="relative mx-auto flex h-[560px] w-full max-w-[560px] items-center justify-center overflow-visible">
      {/* Ambient glow */}
      <motion.div
        className="absolute h-[440px] w-[440px] rounded-full bg-emerald-500/10 blur-3xl"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.32, 0.58, 0.32],
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
            className="h-full w-full object-cover object-center"
            onError={() => setImageFailed(true)}
            animate={{ scale: [1, 1.022, 1] }}
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

        {/* Premium frame overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-transparent to-black/10" />
        <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-emerald-300/10" />

        {/* Clean bottom label */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-emerald-400/10 bg-black/42 px-5 py-3 backdrop-blur-md">
          <p className="text-xs uppercase tracking-[0.24em] text-emerald-300/70">
            Strategy · Data · Delivery
          </p>
        </div>
      </motion.div>

      {/* Available badge - moved away from face */}
      <motion.div
        className="absolute -left-2 top-14 z-30 rounded-2xl border border-emerald-400/20 bg-[#07100C]/85 px-4 py-3 text-sm text-emerald-300 shadow-[0_0_35px_rgba(34,197,94,0.14)] backdrop-blur-xl"
        animate={{ y: [-7, 8, -7] }}
        transition={floatTransition}
      >
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(34,197,94,0.9)]" />
          <span className="font-medium tracking-wide">Available</span>
        </div>
      </motion.div>

      {/* Impact card - right side, not on face */}
      <motion.div
        className="absolute -right-10 top-24 z-30 w-44 rounded-3xl border border-emerald-400/20 bg-[#07100C]/82 p-4 shadow-[0_0_45px_rgba(34,197,94,0.14)] backdrop-blur-xl"
        animate={{ y: [8, -8, 8] }}
        transition={{ ...floatTransition, duration: 6.5 }}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-emerald-200/45">
          Impact
        </p>

        <div className="mt-3 flex items-center gap-2 text-sm text-emerald-100/70">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.55)]" />
          <span>High-impact delivery</span>
        </div>

        <div className="mt-4 flex items-end gap-1.5">
          {[28, 38, 50, 42, 62, 74].map((height, index) => (
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

      {/* Core strengths card - older design with filled bars */}
      <motion.div
        className="absolute -bottom-4 -left-8 z-30 w-60 rounded-3xl border border-emerald-400/20 bg-[#07100C]/84 p-4 shadow-[0_0_45px_rgba(34,197,94,0.14)] backdrop-blur-xl"
        animate={{ y: [7, -8, 7] }}
        transition={{ ...floatTransition, duration: 5.8 }}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-emerald-200/45">
          Core Strengths
        </p>

        <SkillBar label="Business Analysis" value={94} />
        <SkillBar label="Analytics" value={90} />
        <SkillBar label="Delivery" value={88} />
      </motion.div>

      {/* Execution card - small side card */}
      <motion.div
        className="absolute bottom-12 -right-8 z-30 rounded-2xl border border-emerald-400/15 bg-[#07100C]/78 px-4 py-3 shadow-[0_0_35px_rgba(34,197,94,0.1)] backdrop-blur-xl"
        animate={{ x: [-5, 5, -5], y: [4, -4, 4] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/45">
          Execution
        </p>

        <div className="mt-3 space-y-2 text-sm text-emerald-100/65">
          {["Plan", "Analyse", "Deliver"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400/80 shadow-[0_0_8px_rgba(52,211,153,0.45)]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
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