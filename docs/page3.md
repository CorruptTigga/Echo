# Echo: Time System and Simulation Step Handling

This page details how time advances within Echo’s simulation and how the game manages simulation steps in a player-driven, narrative context.

---

## 1. Player-Driven Time Advancement

- **Time Progresses Only on Player Input:**  
  The simulation world advances its state only when the player submits input — whether an action, dialogue, or command.

- **Dialogue & Actions Both Advance Time:**  
  Time advances not just on physical actions (e.g., *attacks*, *moves*), but also on narrative dialogue and other player inputs.

- **No Background Progression:**  
  The world remains static if the player is inactive, ensuring that time-sensitive events or NPC actions don’t occur offscreen without player engagement.

---

## 2. Simulation Steps

- **Discrete Steps:**  
  Each player input triggers one or more simulation steps, updating the world state accordingly.

- **Step Processing:**  
  Simulation steps include:
  - NPC behavior updates (movements, relationships, routines)
  - Faction politics and territorial changes
  - Environmental events (weather changes, day/night cycles)
  - Status effects (injuries, pregnancy progression)
  - Economic shifts and resource management

- **Event Queue:**  
  Time-based events are managed through an event queue processed each step to keep simulation consistent and ordered.

---

## 3. Time Granularity

- **Flexible Time Units:**  
  Simulation steps can represent variable lengths of time depending on the complexity of the player input or narrative context (e.g., minutes, hours, or days).

- **Adaptive Advancement:**  
  The game adjusts time advancement granularity dynamically, faster during travel or downtime, slower during detailed interactions.

---

## 4. Persistent World State

- **Save/Load:**  
  Full simulation state is saved in JSON or binary files, including both short-term and long-term memory.

- **Memory Management:**  
  - **Short-Term Memory:** Tracks recent events, interactions, emotional states.  
  - **Long-Term Memory:** Stores significant milestones, faction alignments, land ownership, and generational changes.

---

## 5. Player Influence on Time

- **Control Over Pace:**  
  Players control how quickly or slowly time passes by the frequency and type of their inputs.

- **Time Skips:**  
  Options may be provided to skip forward in time during uneventful periods, simulating rest or travel.

- **Time Pause:**  
  The game effectively pauses when no player input is given, allowing for reflection or strategy planning.

---

## 6. Technical Considerations

- **Performance Optimization:**  
  Simulation updates are optimized to process large numbers of NPCs and world events efficiently within each step.

- **Parallel Processing:**  
  While the prototype was single-threaded, future versions may employ multi-threading or asynchronous updates to handle simulation complexity.

- **Deterministic Simulation:**  
  Ensures consistent outcomes given identical inputs, critical for debugging and save/load integrity.

---

## 7. Summary

Echo’s time system is uniquely player-driven, advancing the world only with player inputs that encompass both dialogue and actions. This design ensures immersive pacing, player agency over narrative flow, and efficient simulation management.

---
