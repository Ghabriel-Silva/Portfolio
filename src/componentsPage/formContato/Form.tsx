import { Button, Field, Input, Stack, Textarea, Flex } from "@chakra-ui/react"
import { useForm } from "react-hook-form"

interface FormValues {
    name: string
    email: string
    message: string
}


function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>()

    const onSubmit = async (data: FormValues) => {
        try {
            const res = await fetch("http://localhost:3001/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })
            const result = await res.json()
            if (result.success) {
                alert("mensagem enviada com sucesso!")
                console.log(data)
            }
        } catch (err) {
            console.error(err)
            alert('Erro ao envar mensagem!')
        }
    }


    return (
        <Flex
            pt="90px"
            justify="center"
            align="center"
        >
            <Stack maxW="lg" w="100%">
                <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
                    <Stack gap="4" align="flex-start" alignItems="center">
                        <Field.Root invalid={!!errors.name}>
                            <Field.Label>Nome</Field.Label>
                            <Input
                                placeholder="Digite seu nome"
                                type="text"
                                variant="subtle"
                                {...register("name", { required: true })}
                            />
                            <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
                        </Field.Root>
                        <Field.Root invalid={!!errors.email}>
                            <Field.Label>Email</Field.Label>
                            <Input
                                placeholder="Digite seu email"
                                type="email"
                                variant="subtle"
                                {...register("email", { required: true })}
                            />
                            <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                        </Field.Root>
                        <Field.Root invalid={!!errors.message}>
                            <Field.Label>Assunto</Field.Label>
                            <Textarea
                                variant="subtle"
                                placeholder="Digite o assunto"
                                {...register("message", { required: true })}
                            />
                            <Field.ErrorText>{errors.message?.message}</Field.ErrorText>
                        </Field.Root>
                        <Button type="submit">Enviar</Button>
                    </Stack>
                </form>
            </Stack>
        </Flex>
    )
}

export default Form