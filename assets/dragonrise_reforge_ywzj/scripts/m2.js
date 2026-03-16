function updateBones(context) {
    const builder = createPoseBuilder()
    builder.setRotation("base",  -context.getPartXRot("m2"), -context.getPartYRot("m2"), 0)
    return builder
}
