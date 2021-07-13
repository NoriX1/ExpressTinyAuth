import { Router, Request, Response } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get("/login", (req: Request, res: Response): void => {
  res.send(`
    <form method="POST">
      <div>
        <label for="email">Email</label>
        <input id="email" name="email" type="text">
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" name="password" type="password">
      </div>
      <button>Submit</button>
    </form>
  `);
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email) {
    res.send(email.toUpperCase());
  } else {
    res.status(422).send("You must provide an email");
  }
});

export { router };
