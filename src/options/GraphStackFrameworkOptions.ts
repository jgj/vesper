import {CorsOptions} from "cors";
import {Application} from "express";
import {SchemaBuilderOptions} from "./SchemaBuilderOptions";
import {RequestHandler} from "express-serve-static-core";

/**
 * GraphStack framework initialization options.
 */
export interface GraphStackFrameworkOptions extends SchemaBuilderOptions {

    /**
     * Port on which http server must be launched.
     */
    port: number;

    /**
     * List of express middlewares to use.
     */
    use?: RequestHandler[];

    /**
     * If provided, then given express application instance will be used instead of creating a new one.
     * This way you can pre-configure your express application.
     */
    expressApp?: Application;

    /**
     * Route used for GraphQL controllers.
     * By default is equal to "/graphql".
     */
    graphQLRoute?: string;

    /**
     * Route used for GraphQL controllers.
     * By default is equal to "/graphiql".
     *
     * You can explicitly disable GraphIQL by setting false option.
     * Its enabled only if NODE_ENV is not equal to "prod".
     */
    graphIQLRoute?: string|boolean;

    /**
     * Indicates if cors are enabled.
     * Disabled by default.
     *
     * @see https://github.com/expressjs/cors
     */
    cors?: boolean|CorsOptions;

}