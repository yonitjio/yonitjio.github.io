---
title: Implementation
---

Nuido's architecture is built around a set of core components and their associated models, providing the structure for creating diagrams and workflows. These components work together to manage visual representation, data, and connections within the application.

## Key Components

 `Document`: This represents the overall workspace – think of it as a "drawing page" where all nodes and connections are arranged. It’s the foundational model upon which all UI elements are built. It manages the document's state, including node arrangement, connection properties, and overall layout.

 `Node`: Represents individual graphical elements within the document, such as shapes, icons, or custom components. Each Node includes ports for establishing connections with other nodes. Nodes are responsible for managing their own visual representation and associated data (e.g., properties, labels).

 `Edge`: Defines the relationships between nodes. Edges utilize paths and joints to manage complex layouts and connection pathways. They represent the flow of information or activity between connected elements.

 `Port`: A crucial element for defining connections. Ports act as input or output points on a `Node`, facilitating the creation of connections with other ports on different `Node`s. They control the directionality and properties of connections.

 `Path`: Represents the route a connection takes across the document.

 `Joint`: A specific location along a Path, used for precise control over connection placement. This allows for intricate layout designs and fine-tuning of connection positioning within complex diagrams.

## Models
Each component is backed by corresponding models (`DocumentModel`, `NodeModel`, `ConnectionModel`, `PortModel`, `PathModel`, `JointModel`) to manage data and logic within Nuido. These models provide the underlying structure for storing and manipulating the properties of each component.

## Section Nodes
To support complex node structures, we've introduced `SectionedNode` and its associated model, `SectionedNodeModel`. These are derived from `Node` and `NodeModel`, allowing users to create nodes with internal subdivisions or sections for organizing data and connections within a single node.

## Nuido UI Component
The core components and models described above are managed and orchestrated through a central Owl component: `NuidoUi`. This component provides the user interface for interacting with and manipulating these elements.

## Registries
To promote extensibility and maintainability, Nuido utilizes registries to manage different types of components. These registries allow developers to easily add new node types, port types, edge types, and section types without modifying the core application code.

- `NuidoNodeRegistryName` Used for registering and managing `Node` types.
- `NuidoPortRegistryName` Used for registering and managing `Port` types.
- `NuidoNodeSectionRegistryName` Used for registering and managing `SectionedNode` sections.
- `NuidoEdgeRegistryName` Used for registering and managing `Edge` types.
