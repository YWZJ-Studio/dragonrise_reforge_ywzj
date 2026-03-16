function prepareBones() {
    const builder = createPoseBuilder()
    context.rotateBone("BB2", 0, -context.getPartYRot("turret"), 0)
    context.rotateBone("bone8", -context.getPartXRot("turret"), 0, 0)
    return builder
}
