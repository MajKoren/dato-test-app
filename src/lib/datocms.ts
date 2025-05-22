// src/lib/datocms.ts
import { executeQuery } from "@datocms/cda-client";

export async function performRequest<T>(query: string, options?: { variables?: Record<string, any> }): Promise<T> {
    return executeQuery<T>(query, {
        ...options,
        token: process.env.DATOCMS_API_TOKEN!,
        environment: process.env.DATOCMS_ENVIRONMENT,
    });
}
