import { Button, Field, Input, Stack, Textarea, Flex } from "@chakra-ui/react"
import { useForm } from "react-hook-form"

import { Toaster, toaster } from "@/components/ui/toaster"

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
        const promise = fetch("https://backend-portfolio-gilt.vercel.app/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }).then(async (res) => {
            const data = await res.json();
            if (!data.success) throw new Error("Erro ao enviar");
            return data; // retorno os estado da requsição 
        })

        toaster.promise(promise, { //pasando a promessa para o toster, oberservando o 3 estado pedding, success, reject
            loading: { title: "Enviando...", description: "Aguarde um momento" },
            success: { title: "Mensagem enviada!", description: "Sua mensagem foi enviada com sucesso" },
            error: { title: "Erro", description: "Erro ao enviar a mensagem" },
        })
    };


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
                            <Field.Label>Mensagem</Field.Label>
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
            <Toaster />
        </Flex>
    )
}

export default Form