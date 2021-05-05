export type Todo = {
  text: string
  isComplete: boolean,
  id?: string
}

export type TodoFormProps = {
  onSubmit: (todo: Todo) => void
}
