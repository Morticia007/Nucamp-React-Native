//
//  NuCampApp.swift
//  NuCamp
//
//  Created by JacquelynElder on 3/3/21.
//

import SwiftUI

@main
struct NuCampApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
