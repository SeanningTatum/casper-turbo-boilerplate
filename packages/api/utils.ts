import { initTRPC } from "@trpc/server";
import { TRPCPanelMeta } from "trpc-panel";

const t = initTRPC.meta<TRPCPanelMeta>().create();

export const router = t.router;
export const createCallerFactory = t.createCallerFactory;
export const procedure = t.procedure;
