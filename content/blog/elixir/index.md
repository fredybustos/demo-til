---
title: Elixir
date: "2015-05-06T23:46:37.121Z"
description: "test"
tag: "Elixir"
---

Scalability
All Elixir code runs inside lightweight threads of execution (called processes) that are isolated and exchange information via messages:

```
  current_process = self()

  # Spawn an Elixir process (not an operating system one!)

  spawn_link(fn ->
  send(current_process, {:msg, "hello world"})
  end)

  # Block until the message is received

  receive do
  {:msg, contents} -> IO.puts(contents)
  end
```

Due to their lightweight nature, it is not uncommon to have hundreds of thousands of processes running concurrently in the same machine. Isolation allows processes to be garbage collected independently, reducing system-wide pauses, and using all machine resources as efficiently as possible (vertical scaling).
