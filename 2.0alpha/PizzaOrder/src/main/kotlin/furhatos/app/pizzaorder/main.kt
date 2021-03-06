package furhatos.app.pizzaorder

import furhatos.app.pizzaorder.flow.Idle
import furhatos.skills.Skill
import furhatos.flow.kotlin.*
import furhatos.util.Gender
import furhatos.util.Language

class PizzaOrderSkill : Skill() {
    override fun start() {
        // Run skill
        Flow().run(Idle)
    }
}

fun main(args: Array<String>) {
    Skill.main(args)
}
