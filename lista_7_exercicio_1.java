import java.util.ArrayList;
import java.util.List;

interface Operario {
    void trabalhar();
}

class OperadorDeCorte implements Operario {
    public void trabalhar() {
        System.out.println("corta, corta, corta ...");
    }
}

class OperadorDeDobra implements Operario {
    public void trabalhar() {
        System.out.println("dobra, dobra, dobra ...");
    }
}

class OperadorDePrensa implements Operario {
    public void trabalhar() {
        System.out.println("prensa, prensa, prensa ...");
    }
}

class Fabrica {
    private final List<Operario> operarios;

    public Fabrica() {
        operarios = new ArrayList<>();
    }

    public void adicionarOperario(Operario operario) {
        operarios.add(operario);
    }

    public void iniciarExpediente() {
        for (Operario operario : operarios) {
            operario.trabalhar();
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Fabrica fabrica = new Fabrica();
        fabrica.adicionarOperario(new OperadorDeCorte());
        fabrica.adicionarOperario(new OperadorDeDobra());
        fabrica.adicionarOperario(new OperadorDePrensa());

        fabrica.iniciarExpediente();
    }
}