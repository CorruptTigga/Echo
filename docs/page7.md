# Echo: Combat, Skills, and Randomization

This page covers the mechanics behind combat, skill systems, and how randomness is integrated to simulate uncertainty and variety in Echo’s Viking-era world.

---

## 1. Combat System Overview

- **Tactical Simulation:**  
  - Combat occurs on the 2D tile map, supporting Hex, Isometric, or Square grids.  
  - Positioning, terrain, and cover influence combat outcomes.  
  - NPCs and player can use weapons, shields, and armor with varying stats.

- **Combat Flow:**  
  - Turn-based but integrated within the simulation steps triggered by player inputs.  
  - Actions include attacking, defending, moving, using items, or special maneuvers.

- **AI Behavior:**  
  - NPCs choose combat tactics based on personality, skills, morale, and situation.  
  - Options include fight, flee, assist allies, or surrender.

---

## 2. Skill System

- **Core Mechanics:**  
  - Based on DnD 5e style skills and abilities, adapted for static health pools (no HP scaling).  
  - Skills cover combat (melee, ranged), crafting, diplomacy, survival, and more.

- **Skill Progression:**  
  - Skills improve with use and training over time.  
  - NPCs and player characters develop unique skill profiles influencing gameplay.

- **Skill Checks:**  
  - Actions like lockpicking, persuasion, or crafting require skill checks with varying difficulty.

---

## 3. Randomization and Dice Rolls

- **Dice Mechanics:**  
  - Dice rolls introduce uncertainty for actions, skill checks, and combat outcomes.  
  - Rolls determine success, failure, and degree of effect (e.g., critical hits or misses).

- **Modifiers:**  
  - Character stats, equipment, and environmental factors modify roll results.  
  - NPC mood or fatigue can influence chances dynamically.

- **Narrative Impact:**  
  - Random outcomes affect narrative descriptions and NPC reactions.  
  - The LLM weaves results into coherent and immersive storytelling.

---

## 4. Combat Consequences

- **Health and Injury:**  
  - Static health pool with injuries impacting performance.  
  - Critical injuries can cause long-term effects or death.

- **Death and Permadeath:**  
  - Death is permanent for NPCs and player unless permadeath mode is disabled.  
  - Blood and injury visuals appear on tilemap for immersive feedback.

- **Morale and Aftermath:**  
  - Combat outcomes affect NPC morale, faction reputation, and future behavior.  
  - Survivors react emotionally and may seek revenge or retreat.

---

## 5. Player Control and Interaction

- **Action Commands:**  
  - Players issue commands via natural language with action markers (e.g., *swings axe*).  
  - Combat is narrated with clear feedback but no hand-holding.

- **Tactical Options:**  
  - Players can plan attacks, use terrain advantages, or negotiate surrender.  
  - Available moves depend on skills, equipment, and situation.

---

## 6. Technical Implementation

- **Combat Resolution:**  
  - Dice rolls and skill checks computed by LLM with data from character stats and environment.  
  - Simulation updates tile states and NPC statuses accordingly.

- **Integration with Simulation:**  
  - Combat outcomes feed into NPC emotions, memory, and relationships.  
  - Results persist through save/load cycles and influence world state.

---

## 7. Summary

Echo’s combat and skill systems blend tactical depth with narrative richness, using randomness to create unpredictable and engaging encounters. This approach supports a realistic and immersive Viking-era simulation while allowing player freedom and meaningful consequences.

---
