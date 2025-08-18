import { Button, Field, Input, Stack, Textarea, Text, Heading, Highlight } from "@chakra-ui/react"
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
        reset,
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
            success: { title: "Mensagem enviada!", description: ` ${data.name} sua mensagem foi enviada com sucesso`, duration: 4000 },
            error: { title: "Erro", description: "Erro ao enviar a mensagem" },
        })
        reset()

    };


    return (
        <Stack
            mt="90px"
            justify="center"
            align="center"
            w={"100%"}
        >
            <Heading textAlign={"center"} lineHeight="tall" fontSize={{ base: "4xl", sm: "4xl", md: "5xl", lg: "5xl" }} fontWeight="semibold">
                <Highlight
                    styles={{ px: "0.5", bg: "purple.subtle" }}
                    query={["Contato", "Fedback"]}
                >
                    Entre em Contato ou deixe seu Fedback!
                </Highlight>
            </Heading>
            <Text textAlign={"center"} color="fg.muted" fontStyle="normal" fontWeight="normal"  >Sua opinião é essencial para aprimorar o projeto. Entre em contato ou compartilhe seu feedback para que possamos oferecer a melhor experiência possível.</Text>
            <Stack
                mt="40px"
                justify="center"
                align="center"
                w="100%"
                bg="bg.subtle"
                borderRadius="xl"

            >
                <Stack maxW="4xl" w="100%" pt="40px" pb="40px" px="16px" >
                    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
                        <Stack gap="4" align="flex-start" alignItems="center" >
                            <Field.Root invalid={!!errors.name}>
                                <Field.Label>Nome</Field.Label>
                                <Input
                                    placeholder="Digite seu nome"
                                    type="text"
                                    variant="subtle"
                                    {...register("name", { required: "Nome é obrigatório" })}
                                />
                                <Field.ErrorText> {errors.name?.message} </Field.ErrorText>
                            </Field.Root>
                            <Field.Root invalid={!!errors.email}>
                                <Field.Label>Email</Field.Label>
                                <Input
                                    placeholder="Digite seu email"
                                    type="email"
                                    variant="subtle"
                                    {...register("email", {
                                        required: "Email é obrigatório",
                                        pattern: {
                                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                            message: "Digite um email válido"
                                        }
                                    })}
                                />
                                <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                            </Field.Root>
                            <Field.Root invalid={!!errors.message}>
                                <Field.Label>Mensagem</Field.Label>
                                <Textarea
                                    variant="subtle"
                                    placeholder="Digite sua mensagem"
                                    {...register("message", { required: "Mensagem é obrigatória!" })}
                                />
                                <Field.ErrorText>{errors.message?.message}</Field.ErrorText>
                            </Field.Root>
                            <Button mt=" 15px" type="submit" width={"100px"}>Enviar</Button>
                        </Stack>
                    </form>
                </Stack>
            </Stack>
            <Toaster />
        </Stack>
    )
}

export default Form