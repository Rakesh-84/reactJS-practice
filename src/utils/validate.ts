import {z, ZodError} from "zod";
import { HttpException, HttpStatus } from "@nestjs/common";


function validateInput<T>(schema: z.ZodSchema<T>, rawInput: unknown): T {
    const result = schema.safeParse(rawInput);
    if (result.success) {
        return result.data;
    }
    
    throw new HttpException(
        {
            statusCode: 400,
            message: "Validation failed",
            errors: result.ZodError.errors.map((err) => ({
              
            }))
        },




}



