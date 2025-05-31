# Echo: Emotional Modeling and Memory System

This page explores how Echo simulates complex emotional states and memory systems for NPCs, driving realistic, autonomous behavior and dynamic relationships.

---

## 1. Emotional Modeling

- **Dynamic Emotional States:**  
  Each NPC has a range of emotional parameters such as:
  - Trust  
  - Fear  
  - Anger  
  - Affection  
  - Loyalty  
  - Anxiety  

- **Emotion Triggers:**  
  NPC emotions fluctuate based on:
  - Player actions and dialogue  
  - Interactions with other NPCs  
  - Environmental events  
  - Personal experiences (e.g., loss, success)

- **Emotional Influence on Behavior:**  
  Emotions affect NPC decisions, dialogue tone, willingness to cooperate, aggression levels, and social interactions.

- **Emotional Decay and Change:**  
  Emotions fade or intensify over time based on new experiences or time elapsed since events.

---

## 2. Memory System

- **Short-Term Memory:**  
  Tracks recent interactions and events influencing immediate emotional responses and behavior.

- **Long-Term Memory:**  
  Records significant historical events, personal milestones, faction changes, and long-standing grudges or alliances.

- **Memory Storage:**  
  Utilizes structured data formats (JSON or binary) managed by the LLM to retain context over time.

- **Memory Recall:**  
  NPCs recall relevant memories to inform decisions, dialogue choices, and relationship dynamics.

---

## 3. Impact on Relationships

- **Relationship Metrics:**  
  NPC-to-NPC and NPC-to-player relationships evolve from cumulative emotional states and shared memories.

- **Conflict and Alliance Formation:**  
  Emotional responses can trigger conflicts, forgiveness, alliances, or betrayals.

- **Social Networks:**  
  NPCs form social networks influenced by their emotions and memories, which dynamically shift as the simulation progresses.

---

## 4. Technical Implementation

- **Emotion Weights and Thresholds:**  
  Emotions have weighted influences on behavior, with thresholds triggering specific actions or dialogue branches.

- **Event-Driven Updates:**  
  Emotions and memories update in response to simulation events, player input, or passage of time.

- **Integration with LLM:**  
  The language model uses emotional and memory states to generate contextually appropriate and nuanced narrative responses.

---

## 5. Player Impact

- **Reputation and Influence:**  
  Player choices affect NPC emotions and memories, shaping how individuals and factions perceive and react to the player.

- **Dynamic NPC Reactions:**  
  NPCs respond emotionally in real-time to player behavior, allowing for emergent storytelling and roleplay depth.

---

## 6. Summary

Echo’s emotional modeling and memory system provide the foundation for deep, believable NPC autonomy. By simulating complex feelings and long-term memory, NPCs behave with nuanced personality, driving a rich and emergent narrative experience.

---
