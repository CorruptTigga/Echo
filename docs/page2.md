# Echo: Player Interaction and Narrative Interface

This page explores how the player interacts with the game world of Echo through natural language input, narrative-driven text parsing, and the interface that blends text and visuals.

---

## 1. Input Method: Natural Language Commands

- **Free-Form Text Input:**  
  Players interact primarily via typing commands or dialogue in natural language, allowing rich, open-ended gameplay and emergent storytelling.

- **Action Markers:**  
  The parser recognizes action tags embedded within player input using delimiters like asterisks (e.g., *draws sword*) to differentiate actions from spoken dialogue.

- **Command Syntax:**  
  While natural language is preferred, certain shorthand commands exist for UI interactions such as *show inventory*, *show stats*, or *inspect [NPC]*.

---

## 2. Narrative-Driven Parsing

- **Context Awareness:**  
  The Game Master LLM interprets player input contextually, understanding the world state, current location, NPC states, and past interactions to respond appropriately.

- **Flexible Interpretation:**  
  Input ambiguity is resolved through player feedback prompts or intelligent guesses to maintain flow without frustration.

- **Dynamic Dialogue:**  
  Player dialogue choices influence NPC reactions, relationships, and branching storylines, enabling personalized experiences.

---

## 3. Text Log and UI Integration

- **Text Log:**  
  The central display area shows ongoing narrative descriptions, NPC dialogue, combat outcomes, and player action feedback in a readable format.

- **Tilemap Visualization:**  
  Below the text log, a 2D tilemap (hex/isometric/square) visually represents the player’s surroundings, NPC positions, and events.

- **UI Elements:**  
  Contextual buttons and popups allow quick access to stats, inventory, relationship info, and faction details without disrupting immersion.

---

## 4. Player Freedom and Consequences

- **No Hand-Holding:**  
  Echo requires player initiative and investigation; the game does not provide quest markers or explicit guidance.

- **Consequences Tracking:**  
  Player actions impact NPC attitudes, faction relations, and world state dynamically, with consequences unfolding organically.

- **Reputation System:**  
  The game tracks player reputation externally through NPC and faction perceptions rather than an internal morality meter.

---

## 5. Dialogue and Action Flow

- **Narrative Style:**  
  The interface encourages storytelling, with actions and dialogue blending seamlessly for immersive roleplay.

- **Multimodal Input:**  
  Players can mix speech, commands, and UI interaction in their inputs (e.g., “*raises shield* Halt! Who goes there?”).

- **Emotional Feedback:**  
  NPC responses reflect their emotional state and memories, providing varied and realistic interaction outcomes.

---

## 6. Accessibility and Usability

- **Customization:**  
  Options exist to adjust text verbosity, detail level in narrative descriptions, and input sensitivity.

- **Feedback:**  
  Clear error messages and suggestions help players understand parser misunderstandings or invalid commands.

- **Dev Console:**  
  A built-in developer console (via ImGui) supports debugging, command injection, and state inspection during development.

---

## 7. Technical Notes

- **Parsing Engine:**  
  The parser is designed for extensibility, with the ability to incorporate new actions, syntax rules, and dialogue templates over time.

- **LLM Integration:**  
  The Game Master LLM processes input, generating coherent narrative output and NPC dialogue consistent with game state and lore.

- **Performance:**  
  Optimized for low latency to keep narrative flow smooth, even as complex simulations run in the background.

---

## Summary

Player interaction in Echo centers on natural language input interpreted by a sophisticated narrative parser backed by the Game Master LLM. Combined with a clean UI and immersive text-and-tile visualization, this system provides an open-ended, richly interactive experience.

---
