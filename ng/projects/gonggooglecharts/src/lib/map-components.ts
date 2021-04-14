// insertion point sub template for components imports 
import { RessourcesTableComponent } from './ressources-table/ressources-table.component'
import { TasksTableComponent } from './tasks-table/tasks-table.component'

// insertion point sub template for map of components per struct 
export const MapOfRessourcesComponents: Map<string, any> = new Map([["RessourcesTableComponent", RessourcesTableComponent],])
export const MapOfTasksComponents: Map<string, any> = new Map([["TasksTableComponent", TasksTableComponent],])

// map of all ng components of the stacks
export const MapOfComponents: Map<string, any> =
  new Map(
    [
      // insertion point sub template for map of components 
      ["Ressource", MapOfRessourcesComponents],
      ["Task", MapOfTasksComponents],
    ]
  )