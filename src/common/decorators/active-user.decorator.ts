import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const ActiveUser = createParamDecorator(
     (data: unknown, ctx: ExecutionContext) => {
         const request = ctx.switchToHttp().getRequest();
         let str = request.rawHeaders[3]
         let newStr = str.slice(7)
         let user = JSON.parse (atob (newStr.split ('.')[1]));
        // console.log(user)
         return user;
     }
)
