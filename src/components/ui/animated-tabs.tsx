"use client" 

import * as React from "react"
import { useEffect, useRef, useState } from "react";
 
export interface AnimatedTabsProps {
  tabs: { label: string }[];
  activeTab: string;
  onTabChange: (label: string) => void;
}
 
export function AnimatedTabs({ tabs, activeTab, onTabChange }: AnimatedTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);
 
  useEffect(() => {
    const container = containerRef.current;
 
    if (container && activeTab) {
      const activeTabElement = activeTabRef.current;
 
      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;
 
        const clipLeft = offsetLeft + 16;
        const clipRight = offsetLeft + offsetWidth + 16;
 
        container.style.clipPath = `inset(0 ${Number(
          100 - (clipRight / container.offsetWidth) * 100,
        ).toFixed()}% 0 ${Number(
          (clipLeft / container.offsetWidth) * 100,
        ).toFixed()}% round 17px)`;
      }
    }
  }, [activeTab]);
 
  return (
    <div className="relative mx-auto flex w-full max-w-fit flex-col items-center overflow-x-auto rounded-full border border-card-border bg-card/50 px-4 py-3 backdrop-blur-sm">
      <div
        ref={containerRef}
        className="absolute z-10 w-full overflow-hidden [clip-path:inset(0px_75%_0px_0%_round_17px)] [transition:clip-path_0.25s_ease]"
      >
        <div className="relative flex w-full justify-center bg-accent">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => onTabChange(tab.label)}
              className="flex h-10 shrink-0 items-center rounded-full px-4 py-3 text-sm font-medium text-black sm:h-12 sm:px-5"
              tabIndex={-1}
            >
              <span className="sm:hidden">{index + 1}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
 
      <div className="relative flex w-full justify-center">
        {tabs.map(({ label }, index) => {
          const isActive = activeTab === label;
 
          return (
            <button
              key={index}
              ref={isActive ? activeTabRef : null}
              onClick={() => onTabChange(label)}
              className="flex h-10 shrink-0 cursor-pointer items-center rounded-full px-4 py-3 text-sm font-medium text-muted sm:h-12 sm:px-5"
            >
              <span className="sm:hidden">{index + 1}</span>
              <span className="hidden sm:inline">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
