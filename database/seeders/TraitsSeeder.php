<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class TraitsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('traits')->insert([

            ['name' => 'Darkvision', 'description' => 'Puedes ver en luz tenue hasta 60 pies como si fuera luz brillante, y en la oscuridad como si fuera tenue (sin distinguir colores).', 'race_id' => 1, 'subrace_id' => null, 'class_id' => null], // Ejemplo Enano, Elf, Semi-orco, Tiefling
            ['name' => 'Dwarven Resilience', 'description' => 'Ventaja en tiradas de salvación contra el veneno y resistencia al daño por veneno.', 'race_id' => 1, 'subrace_id' => null, 'class_id' => null], // Enano
            ['name' => 'Dwarven Combat Training', 'description' => 'Competencia con hacha de batalla, hacha arrojadiza, martillo ligero y mandoble.', 'race_id' => 1, 'subrace_id' => null, 'class_id' => null], // Enano
            ['name' => 'Tool Proficiency', 'description' => 'Competencia con una herramienta artesanal a elección (smith’s tools, brewer’s supplies, mason’s tools).', 'race_id' => 1, 'subrace_id' => null, 'class_id' => null], // Enano
            ['name' => 'Stonecunning', 'description' => 'Doble bonificación de competencia en Historia para construcciones de piedra.', 'race_id' => 1, 'subrace_id' => null, 'class_id' => null], // Enano
            ['name' => 'Dwarven Toughness', 'description' => 'Tu máximo de puntos de golpe aumenta en 1, y aumenta 1 adicional cada vez que subes de nivel.', 'race_id' => 1, 'subrace_id' => 1, 'class_id' => null], // Subraza Enano de Colina
            ['name' => 'Dwarven Armor Training', 'description' => 'Competencia con armaduras ligeras y medias.', 'race_id' => 1, 'subrace_id' => 2, 'class_id' => null], // Subraza Enano de la Montaña

            ['name' => 'Draconic Ancestry', 'description' => 'Elige un tipo de dragón para determinar tu arma de aliento y resistencia al daño.', 'race_id' => 2, 'subrace_id' => null, 'class_id' => null], // Dracónido
            ['name' => 'Breath Weapon', 'description' => 'Puedes exhalar energía en un área según tu herencia dracónica, con tirada de salvación para evitar daño.', 'race_id' => 2, 'subrace_id' => null, 'class_id' => null],
            ['name' => 'Damage Resistance', 'description' => 'Resistencia al tipo de daño asociado con tu herencia dracónica.', 'race_id' => 2, 'subrace_id' => null, 'class_id' => null],

            ['name' => 'Fey Ancestry', 'description' => 'Ventaja en tiradas de salvación contra ser encantado, y la magia no puede inducir sueño en ti.', 'race_id' => 4, 'subrace_id' => null, 'class_id' => null], // Elfo y Semielfo
            ['name' => 'Darkvision', 'description' => 'Superior visión en la oscuridad (60 pies).', 'race_id' => 4, 'subrace_id' => null, 'class_id' => null], // Semielfo
            ['name' => 'Trance', 'description' => 'Meditas profundamente 4 horas al día para efectos reparadores iguales a 8 horas de sueño.', 'race_id' => 4, 'subrace_id' => null, 'class_id' => null], // Elfo
            ['name' => 'Keen Senses', 'description' => 'Competencia en la habilidad Percepción.', 'race_id' => 4, 'subrace_id' => null, 'class_id' => null], // Elfo
            ['name' => 'Sunlight Sensitivity', 'description' => 'Desventaja en ataques y salvaciones basadas en vista bajo luz solar directa.', 'race_id' => 4, 'subrace_id' => 3, 'class_id' => null], // Elfo oscuro - Drow
            ['name' => 'Drow Magic', 'description' => 'Conoces cantrip Luz danzante; al nivel 3 Luz de hadas; al nivel 5 Oscuridad.', 'race_id' => 4, 'subrace_id' => 3, 'class_id' => null],
            ['name' => 'Drow Weapon Training', 'description' => 'Competencia con espaldares, espadas cortas y ballestas de mano.', 'race_id' => 4, 'subrace_id' => 3, 'class_id' => null],
            ['name' => 'Elf Weapon Training', 'description' => 'Competencia con espada larga, espada corta, arco corto y arco largo.', 'race_id' => 4, 'subrace_id' => 4, 'class_id' => null], // Elfo de Alto o Elfo de los Bosques
            ['name' => 'Cantrip', 'description' => 'Conoces un cantrip de la lista de mago o bardo según el tipo de elfo.', 'race_id' => 4, 'subrace_id' => 4, 'class_id' => null],
            ['name' => 'Extra Language', 'description' => 'Hablas, lees y escribes un idioma adicional a tu elección.', 'race_id' => 4, 'subrace_id' => 4, 'class_id' => null],
            ['name' => 'Fleet of Foot', 'description' => 'Tu velocidad base aumenta a 35 pies.', 'race_id' => 4, 'subrace_id' => 5, 'class_id' => null], // Elfo de los Bosques
            ['name' => 'Mask of the Wild', 'description' => 'Puedes intentar esconderte incluso cuando sólo estás parcialmente oculto por elementos naturales.', 'race_id' => 4, 'subrace_id' => 5, 'class_id' => null],

            ['name' => 'Ability Score Increase', 'description' => 'Cada puntuación de habilidad aumenta en 1.', 'race_id' => 5, 'subrace_id' => null, 'class_id' => null], // Humano
            ['name' => 'Languages', 'description' => 'Hablas, lees y escribes Común y un idioma adicional.', 'race_id' => 5, 'subrace_id' => null, 'class_id' => null],

            ['name' => 'Lucky', 'description' => 'Cuando obtienes un 1 en ataque, chequeo o salvación, puedes tirar de nuevo el dado.', 'race_id' => 6, 'subrace_id' => null, 'class_id' => null], // Mediohalfling
            ['name' => 'Brave', 'description' => 'Ventaja en tiradas de salvación contra el estado Asustado.', 'race_id' => 6, 'subrace_id' => null, 'class_id' => null],
            ['name' => 'Nimble', 'description' => 'Puedes desplazarte a través del espacio de una criatura de tamaño mayor que el tuyo.', 'race_id' => 6, 'subrace_id' => null, 'class_id' => null],
            ['name' => 'Naturally Stealthy', 'description' => 'Puedes intentar esconderte aun cuando sólo estás oscurecido por una criatura mayor.', 'race_id' => 6, 'subrace_id' => 1, 'class_id' => null], // Piesveloces
            ['name' => 'Stout Resilience', 'description' => 'Ventaja en salvaciones contra veneno, y resistencia al daño por veneno.', 'race_id' => 6, 'subrace_id' => 2, 'class_id' => null], // Robustos

            ['name' => 'Darkvision', 'description' => 'Visión superior en la oscuridad hasta 60 pies.', 'race_id' => 7, 'subrace_id' => null, 'class_id' => null], // Medio orco
            ['name' => 'Menacing', 'description' => 'Competencia en la habilidad Intimidación.', 'race_id' => 7, 'subrace_id' => null, 'class_id' => null],
            ['name' => 'Relentless Endurance', 'description' => 'Cuando quedas reducido a 0 pg pero no mueres, puedes bajar a 1 pg en su lugar (una vez por descanso largo).', 'race_id' => 7, 'subrace_id' => null, 'class_id' => null],
            ['name' => 'Savage Attacks', 'description' => 'Cuando haces un crítico con arma cuerpo a cuerpo, tiras un dado extra de daño y lo sumas al crítico.', 'race_id' => 7, 'subrace_id' => null, 'class_id' => null],

            ['name' => 'Darkvision', 'description' => 'Visión superior en la oscuridad hasta 60 pies.', 'race_id' => 8, 'subrace_id' => null, 'class_id' => null], // Tiefling
            ['name' => 'Hellish Resistance', 'description' => 'Resistencia al daño por fuego.', 'race_id' => 8, 'subrace_id' => null, 'class_id' => null],
            ['name' => 'Infernal Legacy', 'description' => 'Conoces el cantrip Thaumaturgia. Al nivel 3 puedes lanzar Reprensión infernal; al nivel 5 Oscuridad.', 'race_id' => 8, 'subrace_id' => null, 'class_id' => null],

            ['name' => 'Blood Rite', 'description' => 'Puedes sacrificar parte de tus puntos de golpe para imbuir tu arma con energía rúnica que añade daño extra.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 9],
            ['name' => 'Crimson Bond', 'description' => 'Puedes crear un lazo sensorial con un objetivo, permitiéndote conocer su ubicación y estado a costa de tu propia energía.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 9],
            ['name' => 'Rite Mastery', 'description' => 'Dominas varios Rituales de Sangre, permitiéndote activar uno adicional sin penalización y mejorar su efecto.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 9],
            ['name' => 'Blood Curse', 'description' => 'Puedes infligir maldiciones de sangre que debilitan al enemigo, pudiendo amplificarlas si aceptas recibir daño.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 9],

            ['name' => 'Spellcasting', 'description' => 'Capacidad para lanzar conjuros de la lista propia, usando la habilidad indicada y recuperando espacios tras reposo largo.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 1], // Bardo
            ['name' => 'Bardic Inspiration', 'description' => 'Como acción adicional, otorgas a un aliado un dado de inspiración (d6) que puede sumar a una tirada.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 1],
            ['name' => 'Expertise', 'description' => 'Duplica tu bonificación de competencia en dos habilidades elegidas.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 1], // Bardo, Pícaro
            ['name' => 'Jack of All Trades', 'description' => 'Añade la mitad de tu bonificación de competencia a chequeos donde no eres competente.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 1],
            ['name' => 'Song of Rest', 'description' => 'Durante un reposo corto, aliados recuperan dados de golpe extra si escuchan tu música.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 1],
            ['name' => 'Font of Inspiration', 'description' => 'Recuperas usos de Inspiración tras un descanso corto, puedes gastar un espacio para recuperar uno.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 1],
            ['name' => 'Countercharm', 'description' => 'Puedes usar tu reacción para dar ventaja en salvaciones contra encantamiento o miedo a ti o aliados cercanos.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 1],
            ['name' => 'Magical Secrets', 'description' => 'Aprendes dos conjuros de cualquier lista que cuentan como de bardo para ti.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 1],
            ['name' => 'Superior Inspiration', 'description' => 'Si inicias iniciativa sin usos de Inspiración, recuperas uno.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 1],

            ['name' => 'Channel Divinity: Turn Undead', 'description' => 'Como acción, ahuyentas a no-muertos en 30 pies con salvación de Sabiduría.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 2], // Clérigo
            ['name' => 'Destroy Undead', 'description' => 'No-muertos con CR bajo son destruidos instantáneamente si fallan la salvación.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 2],
            ['name' => 'Divine Intervention', 'description' => 'Puedes implorar ayuda divina una vez cada 7 días.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 2],

            ['name' => 'Druidic', 'description' => 'Conoces el lenguaje secreto Druídico para dejar mensajes ocultos.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 3], // Druida
            ['name' => 'Wild Shape', 'description' => 'Puedes transformarte en una bestia vista, con restricciones según nivel.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 3],
            ['name' => 'Timeless Body', 'description' => 'A nivel 18 envejeces más despacio: 10 años cuentan como 1 año.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 3],
            ['name' => 'Beast Spells', 'description' => 'Puedes lanzar conjuros con componentes somáticos o verbales en forma de bestia.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 3],
            ['name' => 'Archdruid', 'description' => 'Uso ilimitado de Forma Salvaje y sin componentes en conjuros, incluso en forma de bestia.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 3],

            ['name' => 'Fighting Style', 'description' => 'Eliges un estilo de combate que te da un beneficio específico.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 4], // Guerrero, Paladín, Ranger
            ['name' => 'Second Wind', 'description' => 'Puedes usar acción de bonificación para recuperar puntos de golpe una vez por descanso corto.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 4],
            ['name' => 'Action Surge', 'description' => 'Puedes tomar una acción adicional en tu turno una vez por descanso corto.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 4],
            ['name' => 'Extra Attack', 'description' => 'Obtienes un ataque adicional cuando usas la acción de Ataque.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 4],

            ['name' => 'Divine Smite', 'description' => 'Gastas ranuras de conjuro para infligir daño radiante extra cuando golpeas con arma.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 5], // Paladín
            ['name' => 'Lay on Hands', 'description' => 'Reserva puntos de golpe para curar heridas, recuperándose al descansar.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 5],

            ['name' => 'Ki', 'description' => 'Usas puntos de ki para realizar técnicas especiales.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 6], // Monje
            ['name' => 'Unarmored Defense', 'description' => 'CA = 10 + Destreza + Sabiduría cuando no llevas armadura.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 6],

            ['name' => 'Arcane Echo', 'description' => 'Un residuo mágico permanece tras tus conjuros, permitiéndote potenciar tu siguiente hechizo.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 7],
            ['name' => 'Mystic Focus', 'description' => 'Canalizas tu concentración en un punto arcano, reduciendo distracciones y mejorando tu precisión mágica.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 7],
            ['name' => 'Mana Surge', 'description' => 'Una oleada repentina de energía arcana te permite lanzar un conjuro menor sin consumir recursos.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 7],
            ['name' => 'Spellguard', 'description' => 'Una barrera mágica te protege brevemente tras lanzar un conjuro.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 7],

            ['name' => 'Battle Instincts', 'description' => 'Tus reflejos entrenados te permiten anticiparte a ataques repentinos.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 8],
            ['name' => 'Adrenal Surge', 'description' => 'La adrenalina te concede un breve impulso de fuerza física.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 8],
            ['name' => 'Weapon Expertise', 'description' => 'Tu dominio con las armas te permite aprovechar pequeñas aperturas en la defensa enemiga.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 8],
            ['name' => 'Tactical Rush', 'description' => 'Puedes moverte con rapidez táctica para reposicionarte en combate.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 8],

            ['name' => 'Blood Rite', 'description' => 'Puedes sacrificar parte de tus puntos de golpe para imbuir tu arma con energía rúnica que añade daño extra.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 9],
            ['name' => 'Crimson Bond', 'description' => 'Puedes crear un lazo sensorial con un objetivo, permitiéndote conocer su ubicación y estado a costa de tu propia energía.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 9],
            ['name' => 'Rite Mastery', 'description' => 'Dominas varios Rituales de Sangre, permitiéndote activar uno adicional sin penalización y mejorar su efecto.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 9],
            ['name' => 'Blood Curse', 'description' => 'Puedes infligir maldiciones de sangre que debilitan al enemigo, pudiendo amplificarlas si aceptas recibir daño.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 9],

            ['name' => 'Nature’s Boon', 'description' => 'La naturaleza te concede un pequeño favor que te protege en momentos de peligro.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 10],
            ['name' => 'Primal Guidance', 'description' => 'Un instinto primitivo te orienta hacia la mejor acción en situaciones difíciles.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 10],
            ['name' => 'Wild Focus', 'description' => 'Canalizas la energía salvaje para reforzar tus capacidades temporales.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 10],
            ['name' => 'Beast Affinity', 'description' => 'Tu conexión con las criaturas salvajes te permite comprender sus intenciones con mayor facilidad.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 10],

            ['name' => 'Shadow Step', 'description' => 'Puedes deslizarte brevemente entre sombras, moviéndote con sigilo sobrenatural.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 11],
            ['name' => 'Silent Precision', 'description' => 'Tu entrenamiento te permite actuar sin dejar rastro perceptible.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 11],
            ['name' => 'Marked Target', 'description' => 'Puedes fijar un objetivo para estudiar sus patrones y debilidades.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 11],
            ['name' => 'Evasion Tactics', 'description' => 'Desarrollas técnicas para esquivar ataques con movimientos ágiles y precisos.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 11],

            ['name' => 'Divine Insight', 'description' => 'Recibes una revelación divina que guía tus decisiones en momentos críticos.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 12],
            ['name' => 'Holy Ward', 'description' => 'Una energía sagrada te envuelve temporalmente, protegiéndote del daño.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 12],
            ['name' => 'Blessed Channeling', 'description' => 'Canalizas poder divino para reforzar tu siguiente acción espiritual.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 12],
            ['name' => 'Sanctified Aura', 'description' => 'Una tenue aura sagrada afecta a quienes se encuentran cerca de ti, inspirando determinación.', 'race_id' => null, 'subrace_id' => null, 'class_id' => 12],
        ]);
    }
}
