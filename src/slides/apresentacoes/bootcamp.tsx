import BaseSlide from "@/components/baseSlide/BaseSlide";
import CodeBlock from "@/components/codeBlock/CodeBlock";
import { Heading } from "@chakra-ui/react";

export const BootCampApresentationSlide = () => {
  function renderErrorCode1() {
    return `
        <?php
            $id = $_SESSION['user']['id'];

        if (false === empty($_POST)) {
            //recebendo os dados que vieram do form do HTML
            $name = $_POST['name'];        include '../src/conexao.php';

        // // bind
        $pdo->query($sql);


        echo "<div class='alert alert-success'>
            <strong>Pronto!</strong>
            Novo contatinho inserido 😈 🔥<br>
            <em>{$name}</em>
        </div>";
    }   
?>
            $email = $_POST['email'];
            $phone = $_POST['phone'];

            $sql = "
                INSERT INTO tb_contatos (nome, email, telefone, usuario_id)
                VALUES ('{$name}', '{$email}', '{$phone}', '{$id}');";`;
  }

  function renderCorrectCode1(type: "validation" | "xss" | "sql") {
    if (type === "sql")
      return `
        if (empty($erros)) {
        // 3. CONEXÃO E PREPARED STATEMENT
        include '../src/conexao.php';

        $stmt = $pdo->prepare("
            INSERT INTO tb_contatos (nome, email, telefone, usuario_id)
            VALUES (:name, :email, :phone, :id)
        ");
        
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':phone', $phone);
        $stmt->bindParam(':id', $id);
    `;

    if (type === "validation") {
      return `
    if (strlen($name) < 3 || strlen($name) > 50) {
        $erros[] = "Nome deve ter entre 3 e 50 caracteres.";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $erros[] = "E-mail inválido.";
    }

    if (!preg_match('/^\d{10,15}$/', $phone)) {
        $erros[] = "Telefone deve conter apenas números (10 a 15 dígitos).";
    }

        `;
    }

    if (type === "xss") {
      return `
        echo "<div class='alert alert-success'>
                <strong>Pronto!</strong>
                Novo contatinho inserido 😈 🔥<br>
                <em>" . htmlspecialchars($name) . "</em>
            </div>";
        `;
    }
  }
  function renderErrorCode2() {
    return `
        $view = match ($url['path']) {
        '/' => 'pages/home',
        '/sair' => 'pages/logout',
        // url    =>    caminho do html
        '/usuario/perfil' => 'pages/usuario/perfil',
        '/contatos/cadastro' => 'pages/contato/add',
        '/contatos/listar' => 'pages/contato/list',
        '/contatos/excluir' => 'pages/contato/delete',
        '/contatos/editar' => 'pages/contato/edit',
        '/login' => 'pages/login',
        '/cadastro' => 'pages/usuario/add',
        default => 'pages/notFound',
    };

    render($view);

      function render(string $view): void
    {
        include '../src/components/head.phatml';
        
        if (true === hasLoggedUser()) {
            include '../src/components/menu.phtml';
        }

        include "../src/{$view}.phtml";
        include '../src/components/footer.phtml';
    }
        `;
  }

  function renderCorrectCode2A() {
    return `
        if (false === hasLoggedUser()) {
    echo '<script>location.href = "/login"</script>';
    exit;
}  `;
  }

  function renderCorrectCode2B() {
    return `

	 $path = rtrim($url['path'], '/');     
   	 $path = $path === '' ? '/' : $path;   

    $protected = [
        '/usuario/perfil',
        '/contatos/cadastro',
        '/contatos/listar',
        '/contatos/excluir',
        '/contatos/editar',
    ];

if (!hasLoggedUser() && in_array($path, $protected, true)) {
    header('Location: /login');
    exit();
}
    `;
  }

  function renderErrorCode3() {
    return `
      $senha = $_POST['senha'];

        $now = date('Y-m-d H:i:s');
        $sql = "
            INSERT INTO tb_usuarios 
                (nome, email, senha, criado_em, atualizado_em, ultimo_login)
            VALUES
                ('{$nome}', '{$email}', '{$senha}', '{$now}', '{$now}', '{$now}')
            ";
    `;
  }

  function renderCorrectCode3() {
    return `
  $senhaHash = password_hash($senha, PASSWORD_BCRYPT);
        
        // Evitar SQL Injection com prepared statements
        include '../src/conexao.php';
        
        try {
            // Verificar se o e-mail já existe no banco
            $stmt = $pdo->prepare("SELECT COUNT(*) FROM tb_usuarios WHERE email = :email");
            $stmt->execute([':email' => $email]);
            $count = $stmt->fetchColumn();
            
            if ($count > 0) {
                echo "<div class='alert alert-danger'>
                        <strong>Erro:</strong> Usuário já cadastrado com o e-mail: {$email}!</div>";
            } else {
                // Inserir no banco de dados
                $now = date('Y-m-d H:i:s');
                $sql = "
                    INSERT INTO tb_usuarios (nome, email, senha, criado_em, atualizado_em, ultimo_login)
                    VALUES (:nome, :email, :senha, :criado_em, :atualizado_em, :ultimo_login)
                ";

                // Preparando a query
                $stmt = $pdo->prepare($sql);
                $stmt->execute([
                    ':nome' => htmlspecialchars($nome), // Proteção contra XSS
                    ':email' => htmlspecialchars($email), // Proteção contra XSS
                    ':senha' => $senhaHash,
                    ':criado_em' => $now,
                    ':atualizado_em' => $now,
                    ':ultimo_login' => $now
                ]);
    `;
  }

  return (
    <BaseSlide>
      <section data-background-color="white">
        <Heading as="h2">Falha 1: Injeção e "Design Inseguro"</Heading>
        <ul>
          <li className="fragment">SQL Injection</li>
          <li className="fragment">XSS</li>
          <li className="fragment">Validações de campos</li>
        </ul>
      </section>
      <section data-background-color="white">
        <h2>Errado:</h2>
        <CodeBlock theme={"dracula"} className="language-php">
          {renderErrorCode1()}
        </CodeBlock>
      </section>
      <section data-background-color="white">
        <h2>SQL Injection</h2>

        <CodeBlock theme={"dracula"} className="language-php">
          {renderCorrectCode1("sql")}
        </CodeBlock>
      </section>
      <section data-background-color="white">
        <h2>Validação</h2>

        <CodeBlock theme={"dracula"} className="language-php">
          {renderCorrectCode1("validation")}
        </CodeBlock>
      </section>
      <section data-background-color="white">
        <h2>XSS</h2>
        <CodeBlock theme={"dracula"} className="language-php">
          {renderCorrectCode1("xss")}
        </CodeBlock>
      </section>

      <section data-background-color="white">
        <h2> Falha 2: Falhas Críticas de Criptografia</h2>
        <ul>
          <li className="fragment">Senha sem hasheamento</li>
        </ul>
      </section>
      <section data-background-color="white">
        <h2>Errado: </h2>
        <CodeBlock theme={"dracula"} className="language-php">
          {renderErrorCode3()}
        </CodeBlock>
      </section>
      <section data-background-color="white">
        <h2>Correto:</h2>
        <CodeBlock theme={"dracula"} className="language-php">
          {renderCorrectCode3()}
        </CodeBlock>
      </section>

      <section data-background-color="white">
        <h2>Falha 3: Quebra de controle de acesso</h2>
        <ul>
          <li className="fragment">
            Rotas sendo expostas para usuários não logados
          </li>
        </ul>
      </section>
      <section data-background-color="white">
        <h2>Errado:</h2>
        <CodeBlock theme={"dracula"} className="language-php">
          {renderErrorCode2()}
        </CodeBlock>
      </section>

      <section data-background-color="white">
        <h2>Proposta 1:</h2>
        <CodeBlock theme={"dracula"} className="language-php">
          {renderCorrectCode2A()}
        </CodeBlock>
      </section>
      <section data-background-color="white">
        <h2>Proposta 2:</h2>
        <CodeBlock theme={"dracula"} className="language-php">
          {renderCorrectCode2B()}
        </CodeBlock>
      </section>
    </BaseSlide>
  );
};
