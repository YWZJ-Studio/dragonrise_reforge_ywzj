const bombs = ["bone40", "bone38", "bone39"]
const rockets = ["bone42", "bone45", "bone41", "bone44", "bone43", "bone46"]

function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const previousPropellerRotation = context.getFloat("propellerRotation", 0);
    const propellerRotation = (previousPropellerRotation + context.getPower() / 5) % 360;
    context.setFloat("propellerRotation", propellerRotation)

    const builder = createPoseBuilder();
    // 螺旋桨
    builder.setRotation("bone4", 0, 0, -propellerRotation);
    // 舵面
    builder.setRotation("bone48", pitchInput * 16, 0, 0);
    builder.setRotation("bone49", pitchInput * 16, 0, 0);
    builder.setRotation("bone17", 0, -yawInput * 16, 0);
    builder.setRotation("bone12", rollInput * 16, 0, 0);
    builder.setRotation("bone18", -rollInput * 16, 0, 0);
    // 炸弹
    let remainBombs = context.getWeaponRemainAmmo("pilot", 1)
    for (let i = 0; i < bombs.length; i++) {
        if (i < bombs.length - remainBombs) {
            builder.hideBone(bombs[i])
        }
    }
    // 火箭弹
    let remainRockets = context.getWeaponRemainAmmo("pilot", 2)
    for (let i = 0; i < rockets.length; i++) {
        if (i < rockets.length - remainRockets) {
            builder.hideBone(rockets[i])
        }
    }
    return builder;
}
