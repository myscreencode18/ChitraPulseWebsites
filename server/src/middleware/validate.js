import { ZodError } from "zod";

export const validate =
  (schema) =>
  (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({
          success: false,
          errors: err.issues.map((issue) => issue.message),
        });
      }

      // fallback (should rarely happen)
      return res.status(500).json({
        success: false,
        message: "Validation failed",
      });
    }
  };
