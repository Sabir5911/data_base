import {
    pgTable,
    serial,
    text,
    varchar,
    timestamp,
    boolean,
  } from "drizzle-orm/pg-core";
  import { drizzle } from "drizzle-orm/vercel-postgres";
  import { InferModel } from "drizzle-orm";
  import { sql } from "@vercel/postgres";
import { type } from "os";
  export const  todostable = pgTable('newtodos',{

    id: serial("id").primaryKey(),                                    // primary key is the id and alwasy unique

    task:varchar("task",{length:256})

  })

  export type Todo =InferModel<typeof todostable>
  export type NewTodo =InferModel<typeof todostable, "insert">

  export const db=drizzle(sql)

