import shimmer from "shimmer"
import mongo from "mongodb"

import { Tracer, Plugin } from "@appsignal/nodejs"

// quick alias to expose a type for the entire module
type MongoModule = typeof mongo

export const PLUGIN_NAME = "mongodb"

export const instrument = (
  mod: MongoModule,
  tracer: Tracer
): Plugin<MongoModule> => ({
  version: ">= 3.3.0",
  install(): MongoModule {
    return mod
  },
  uninstall(): void {}
})
