# Echo: Save/Load System and World State Persistence

This page details the architecture and design principles behind Echo’s saving, loading, and world state persistence systems to ensure a seamless, consistent simulation experience.

---

## 1. Core Objectives

- **Complete World Persistence:**  
  - Preserve the entire game state across sessions, including NPCs, factions, player data, and world conditions.  
  - Ensure no “reset” feeling when players reload — the world evolves naturally even while offline.

- **Efficiency and Scalability:**  
  - Save/load mechanisms must handle potentially millions of NPCs and complex state data without prohibitive memory or performance costs.

- **Robustness:**  
  - Safeguards against data corruption and enable rollback or recovery in case of errors.

---

## 2. Data Formats

- **JSON and Binary Storage:**  
  - Short-term interaction data (daily activities, dialogue context) primarily stored in JSON for readability and debugging.  
  - Long-term, large-scale world state (land ownership, faction status, generational data) stored in a more compact binary format for performance.

- **Hybrid Approach:**  
  - Use JSON for flexibility during development and debugging phases; switch to binary for release builds where performance matters most.

---

## 3. World State Components

- **NPC State:**  
  - Physical stats, skills, emotional states, relationships, current activities, location on tilemap.  
  - Short-term memory (recent conversations, emotional triggers) and long-term memory (major life events).

- **Factions & Cultures:**  
  - Leadership, territorial control, political relationships, reputations, ongoing conflicts.

- **Player State:**  
  - Inventory, skills, reputation with factions, active quests, land ownership.

- **Environmental Data:**  
  - Weather, resource availability, season cycles, events.

---

## 4. Time & Simulation Step Persistence

- **Player-Driven Time:**  
  - Each player input triggers simulation step advancement.  
  - Save system records the current simulation timestamp and pending events.

- **Background Simulation:**  
  - Off-screen NPCs and factions are simulated “offline” between player sessions and updates persisted on save.

---

## 5. Save/Load Mechanics

- **Incremental Saves:**  
  - Automatic periodic saves and manual saves supported.  
  - Incremental saving reduces overhead by only writing changed data segments.

- **Versioning:**  
  - Save files include version metadata for compatibility across updates.  
  - Migration tools handle state changes between game versions.

- **Backup and Recovery:**  
  - Multiple save slots and automatic backups guard against corruption.  
  - Tools for restoring prior states if needed.

---

## 6. Debugging and Testing Support

- **Rollback & Time Travel:**  
  - Developer tools enable simulating alternative timelines or undoing recent actions for testing.  
  - Potential player-facing features in later builds.

- **Save Inspection:**  
  - Debug consoles to inspect and modify world state during development.

---

## 7. Challenges & Considerations

- **Memory Usage:**  
  - Managing memory footprint given millions of NPCs requires efficient serialization and data pruning strategies.

- **Consistency:**  
  - Ensuring consistency across saves, especially with complex NPC interactions and emergent behaviors.

- **Performance:**  
  - Load times optimized to avoid long waits even with extensive world states.

---

## 8. Summary

Echo’s save/load system is designed to provide a persistent, evolving world that honors player agency and NPC autonomy, supporting a deep and consistent simulation experience across play sessions.

---
