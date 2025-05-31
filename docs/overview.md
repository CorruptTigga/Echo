# Echo: Core Simulation Concepts (Overview)

This document outlines the high-level systems and goals behind **Echo**, a Viking-era, text-driven, open-world life simulation game designed for gritty realism and deep NPC simulation. Each subsequent page will provide a detailed breakdown of individual components.

---

## 1. Game Overview

- **Title:** Echo  
- **Genre:** Text-based open-world life simulation with RPG elements  
- **Time Period:** Viking era with some modern ethical considerations  
- **Perspective:** Top-down 2D tile-based engine (Hex/Isometric/Square options)  
- **Graphics:** 2D tilemaps beneath the text log/UI  
- **Input Method:** Natural language commands from the player  
- **LLM Role:** Acts as Game Master (GM) responsible for simulation logic and narrative consistency  

---

## 2. World & Cultures

- **Hand-crafted World Map:** Built using Tiled  
- **Cultural Detail:** Predefined cultures, factions, cities, and countries; dynamically assigned NPCs  
- **Region Scope:** Initially Northern Europe, potentially expanding to all of Europe  
- **Diversity:** Ethnic and cultural diversity modeled with historical care (e.g., languages, customs, factional conflicts)  

---

## 3. NPC Simulation

- **Organic Generation:** No predefined NPCs; all are generated procedurally  
- **Complex Systems:**  
  - Dynamic relationships (inter-NPC and NPC-to-faction)  
  - Emotional states and memory  
  - Skills and stats  
  - Motivations, opinions, and behavioral modeling  
- **Pregnancy and Repopulation:** Full lifecycle simulation, including age, fertility, death, and family dynamics  

---

## 4. Player Design

- **No Internal Morality System:** Player does not have simulated emotions or motivations  
- **External Reactions Only:** NPCs and factions respond dynamically based on the player's actions and choices  
- **Full Freedom:** The game simulates consequences and reputation based solely on external world perception  

---

## 5. Game Systems

- **Skill System:** Based on DnD 5e with static health pools (no health scaling)  
- **Dice Rolls:** Used for randomization of actions and skill checks  
- **Combat & Raiding:** Tactical simulation with varying NPC responses (fight, flee, assist)  
- **Dialogue & Action Flow:** Narratively-driven text parser with action tagging (e.g., *draws sword* “Back off!”)  

---

## 6. Time Advancement

- **Player-Driven Time:** World state updates only when player inputs are made (not just actions but also dialogue)  
- **Simulation Steps:** Each input advances the simulation clock  
- **Persistence:** Full world state saving via JSON or binary, including both short-term (daily interactions) and long-term (faction creation, land ownership, etc.) memories  

---

## 7. Ethics & Content Boundaries

- **Realism with Responsibility:** Echo aims for authenticity while adhering to strict ethical standards  
- **Banned Content:** No illegal content (e.g., underage marriage consummation, graphic exploitation)  
- **Morality Warnings:** Prominent content warnings upon game start and on store pages  
- **Historical vs Modern Ethics:** Historical references (e.g., slavery, arranged marriage) handled with nuance and care  
- **Slavery:** Implemented only in a historical context (e.g., Viking POWs), never racially motivated  

---

## 8. LLM Role & Memory

- **Memory System:** LLM utilizes structured JSON/binary memory banks for simulation and interaction  
- **Long-Term Memory:** Significant game events, land ownership, factional politics  
- **Short-Term Memory:** Recent events, NPC dialogue context, recent emotional triggers  

---

## 9. Modularity & Debugging

- **Debug Tools:** Dev console with ImGui for immediate testing  
- **Simulation Tools:** Potential for rollback, time-travel, and backups  
- **UI Access:** Players can use text commands to open stat windows, inventories, and entity information  

---

## Future Detailed Pages

The following pages will each focus on a single topic with deep technical and conceptual dives:

- **Page 1:** NPC Generation and Personality Simulation  
- **Page 2:** Player Interaction and Narrative Interface  
- **Page 3:** Time System and Simulation Step Handling  
- **Page 4:** Emotional Modeling and Memory System  
- **Page 5:** Pregnancy and Generational Simulation  
- **Page 6:** Faction and Culture Systems  
- **Page 7:** Combat, Skills, and Randomization  
- **Page 8:** Content Boundaries and Ethical Guardrails  
- **Page 9:** Save/Load System and World State Persistence  
- **Page 10:** LLM Integration and Role as Game Master  

---

